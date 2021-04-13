import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../../../login/services/auth.service';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  shippedOrders = [];
  shippingOrders = [];
  orders = [];
  currentUserID: string;

  selectedTab: number = 0;

  isFirstGetShipping: boolean = true;
  isFirstGetShipped: boolean = true;

  constructor(private db: AngularFirestore, private auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {

    document.querySelector(".menubar").classList.add("display-none")

    this.selectedTab = JSON.parse(localStorage.getItem("chosenTab"));

    // if (this.selectedTab == 1) {
    //   this.getShippedOrders()
    // } else {
    //   this.getShippingOrders();
    // }

    localStorage.clear()

    // this.getCurrentUser()

    this.getShippingOrders()
    this.getShippedOrders()
  }

  ngOnDestroy() {
    document.querySelector(".menubar").classList.remove("display-none")
  }

  changeSelectedTab(event) {
    // console.log(event)
    let selectedTabIndex = event["index"]
    // console.log(selectedTabIndex)

    if (selectedTabIndex == 0) {
      // console.log("shipping")
      // this.getShippingOrders();

    } else {
      // console.log("shipped")
      // this.getShippedOrders();

    }

  }
  getShippingOrders() {
    this.auth.getUserState().subscribe(user => {
      // console.log(user.uid)
      this.currentUserID = user.uid;



      this.db.collection("Orders", ref => ref.where("isDone", "==", false)).valueChanges().subscribe(orders => {
        console.log("shipping orders", orders)

        // if (!this.isFirstGetShipping || orders.length < 1) {
        this.shippingOrders = []
        // }
        // this.orders = orders;

        for (let i = 0; i < orders.length; i++) {
          let recipient = orders[i]["recipient"];
          if (recipient) {
            // console.log(orders[i])
            // Là đơn khách đặt
            if (recipient["userID"] == this.currentUserID && this.isFirstGetShipping) {
              // Nếu đúng khách hiện tại đặt
              this.shippingOrders.push(orders[i])
            } else if (recipient["userID"] == this.currentUserID && !this.isFirstGetShipping) {
              this.shippingOrders.push(orders[i])
            } else if (orders.length < this.shippingOrders.length) {
              // Số lượng đơn vừa giảm
              this.shippingOrders = orders
            }
          }
        }

        this.isFirstGetShipping = false;

        // remove duplicate
        this.shippingOrders = Array.from(new Set(this.shippingOrders.map(a => a.id)))
          .map(id => {
            return this.shippingOrders.find(a => a.id === id)
          })

        console.log('this user shipping orders', this.shippingOrders)
      })
    })
  }

  getShippedOrders() {
    this.auth.getUserState().subscribe(user => {
      // console.log(user.uid)
      this.currentUserID = user.uid;

      // if (!this.isFirstGetShipping) {
      //   this.shippedOrders = [];
      // }

      this.db.collection("Orders", ref => ref.where("isDone", "==", true)).valueChanges().subscribe(orders => {
        console.log("shipped orders", orders)


        this.shippedOrders = [];
        // this.orders = orders;

        for (let i = 0; i < orders.length; i++) {
          let recipient = orders[i]["recipient"];
          if (recipient) {
            // console.log(orders[i])
            // Là đơn khách đặt
            if (recipient["userID"] == this.currentUserID && this.isFirstGetShipped) {
              // Nếu đúng khách hiện tại đặt và không có đơn mới được hoàn thành
              this.shippedOrders.push(orders[i])
            } else if (recipient["userID"] == this.currentUserID && !this.isFirstGetShipped) {
              this.shippedOrders.push(orders[i])
            } else if (orders.length < this.shippedOrders.length) {
              // Số lượng đơn vừa giảm
              this.shippedOrders = orders
            }
          }
        }

        this.isFirstGetShipped = false;

        // remove duplicate
        this.shippedOrders = Array.from(new Set(this.shippedOrders.map(a => a.id)))
          .map(id => {
            return this.shippedOrders.find(a => a.id === id)
          })
        console.log('this user shipped orders', this.shippedOrders)

      })
    })

  }

  openModalConfirm(orderID, orderIndex) {
    this.dialog.open(ConfirmDialogComponent, {
      autoFocus: false
    }).afterClosed().subscribe(res => {
      if (res) {
        // Nếu user chọn đã nhận
        console.log("user confirmed receiving this order")
        this.confirmDoneOrder(orderID, orderIndex);
      }
    })

  }

  confirmDoneOrder(orderID, orderIndex) {
    console.log("click to confirm an order")
    this.isFirstGetShipping = false;
    // console.log("done", orderID)
    this.shippingOrders.splice(orderIndex, 1)
    this.db.collection("Orders", ref => ref.where("id", "==", orderID)).get().subscribe(orderDoc => {
      // console.log(orderDoc)
      let orderDocID = orderDoc.docs[0].id;

      // Add doneAt
      let today = new Date();
      let currentMonth = today.getMonth() + 1;
      let currentYear = today.getFullYear();
      let currentDay = today.getDate();
      let currentHour = today.getHours()
      let currentMinutes = today.getMinutes();
      let fixMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
      let isAM = currentHour >= 12 ? "PM" : "AM";
      let doneAt = `${currentHour}:${fixMinutes} ${isAM} ${currentDay}/${currentMonth}/${currentYear}`;

      this.db.collection("Orders").doc(orderDocID).update({ isDone: true, doneAt: doneAt }).then(() => {
        // this.getShippingOrders()
        // this.getShippedOrders()
        this.shippingOrders = Array.from(new Set(this.shippingOrders.map(a => a.id)))
          .map(id => {
            return this.shippingOrders.find(a => a.id === id)
          })

        this.shippedOrders = Array.from(new Set(this.shippedOrders.map(a => a.id)))
          .map(id => {
            return this.shippedOrders.find(a => a.id === id)
          })
      })
    })



  }

  getCurrentUser() {
    this.auth.getUserState().subscribe(user => {
      // console.log(user)
      this.currentUserID = user.uid;
    })
  }

}
