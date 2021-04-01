import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../../login/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { UsersService } from '../../services/users.service';

import { NotificationsService } from '../../shared/services/noti.service';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  // Edit
  isEdit = false;

  // User
  userAvatarPath: any;
  userAvatarLink: any;
  currentUser: firebase.default.User;
  currentUserData: any;
  currentUserID: any;

  // Information
  fullName: string;
  gender: number;
  birthday: any;
  phone: any;
  address: string;
  email: string;

  // Orders
  shippedOrders = [];
  shippingOrders = [];
  orders = [];

  getOrdersData: Subscription;

  shippingNumber = 0;
  shippedNumber = 0;

  // Report
  totalSpentMoney: string;
  totalBuyProducts: number = 0;

  constructor(private db: AngularFirestore,
    private auth: AuthService,
    private userService: UsersService,
    private fireStorage: AngularFireStorage,
    public notiService: NotificationsService,
    public router: Router) { }

  ngOnInit(): void {


    this.getCurrentUser()




    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("font-weight-bold")
    }

  }




  ngOnDestroy(): void {
    // this.getCurrentUser()
    // this.getOrdersData.unsubscribe()
  }

  changeSelectedTab(event) {
    // let selectedTabIndex = event["index"];

    // if (selectedTabIndex == 1) {
    //   this.getShippingOrders();
    //   this.getShippedOrders();
    // }
  }

  getShippingOrders() {
    this.db.collection("Orders", ref => ref.where("isDone", "==", false)).valueChanges().subscribe(orders => {
      console.log("shipping orders", orders)

      this.shippingOrders = []
      // this.orders = orders;

      if (orders.length < this.shippingOrders.length) {
        // Số lượng đơn vừa giảm
        console.log("orders decrease")
        this.shippingOrders = orders
      } else {
        for (let i = 0; i < orders.length; i++) {
          let recipient = orders[i]["recipient"];
          if (recipient) {
            // console.log(orders[i])
            // Là đơn khách đặt
            if (recipient["userID"] == this.currentUserID) {
              // Nếu đúng khách hiện tại đặt
              this.shippingOrders.push(orders[i])
            }
          }
        }
      }

      // remove duplicate
      this.shippingOrders = Array.from(new Set(this.shippingOrders.map(a => a.id)))
        .map(id => {
          return this.shippingOrders.find(a => a.id === id)
        })
      console.log('this user shipping orders', this.shippingOrders)

      this.shippingNumber = this.shippingOrders.length;
    })
  }

  getShippedOrders() {
    this.db.collection("Orders", ref => ref.where("isDone", "==", true)).valueChanges().subscribe(orders => {
      console.log("shipped orders", orders)

      this.shippedOrders = [];
      // this.orders = orders;

      for (let i = 0; i < orders.length; i++) {
        let recipient = orders[i]["recipient"];
        if (recipient) {
          // console.log(orders[i])
          // Là đơn khách đặt
          if (recipient["userID"] == this.currentUserID) {
            // Nếu đúng khách hiện tại đặt
            this.shippedOrders.push(orders[i])
          } else if (orders.length < this.shippedOrders.length) {
            // Số lượng đơn vừa giảm
            this.shippedOrders = orders
          }
        }
      }

      // remove duplicate
      this.shippedOrders = Array.from(new Set(this.shippedOrders.map(a => a.id)))
        .map(id => {
          return this.shippedOrders.find(a => a.id === id)
        })
      console.log('this user shipped orders', this.shippedOrders)

      this.shippedNumber = this.shippedOrders.length;
    })

  }

  moveToShipped() {
    console.log("click move to shipped")
    localStorage.setItem("chosenTab", "1")
    this.router.navigateByUrl("/pages/profile/orders")
  }

  getOrders() {
    this.db.collection("Orders", ref => ref.where("recipient.userID", "==", this.currentUserID)).valueChanges().subscribe(orders => {
      console.log('orders data in profile page', orders)

      let tempTotalMoney = 0;
      let tempTotalProducts = 0;
      // calculate totalMoneySpent
      for (let i = 0; i < orders.length; i++) {
        if (orders[i]["isDone"]) {
          let moneyToConvert = orders[i]["totalMoney"];
          let trueMoney = Number(moneyToConvert.replace(/[^0-9.-]+/g, "")) * 1000;
          tempTotalMoney += trueMoney;
          tempTotalProducts += orders[i]["totalProducts"]
        }
      }

      this.totalSpentMoney = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tempTotalMoney);
      this.totalBuyProducts = tempTotalProducts;
    })
  }

  getCurrentUser() {
    this.auth.getUserState().subscribe(user => {
      // If have a current user
      this.currentUser = user;
      this.currentUserID = this.currentUser.uid;

      this.db.collection("Users").doc(this.currentUser.uid).valueChanges().subscribe(data => {
        this.currentUserData = data;
        console.log("current user Data: ", this.currentUserData)

        // Display this user data
        this.userAvatarLink = this.currentUserData.avatar;
        this.fullName = this.currentUserData.fullName;
        this.address = this.currentUserData.address;
        this.phone = this.currentUserData.phone;
        this.email = this.currentUserData.email;
        this.gender = this.currentUserData.gender;
        this.birthday = this.currentUserData.birthday;

        this.getOrders()
        this.getShippingOrders();
        this.getShippedOrders();
      })
    })


  }

  userChangeAvatar($event) {
    this.userAvatarPath = $event.target.files[0];

    console.log("avatar path: ", this.userAvatarPath)
    this.fireStorage.upload("/userAvatars/" + `avatar-${this.currentUser.uid}`, this.userAvatarPath)
      .then(() => {
        this.fireStorage.storage.ref('/userAvatars/' + `avatar-${this.currentUser.uid}`).getDownloadURL()
          .then(link => {
            this.userAvatarLink = link;
            console.log("link: " + this.userAvatarLink)
          })
      })


  }

  chooseGenderType(type) {
    this.gender = type;
  }


  editMode() {
    this.isEdit = true;

    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.add("font-weight-bold")
    }
  }

  saveChange() {
    console.log("click save change");
    this.isEdit = false;
    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("font-weight-bold")
    }

    let dataChange = {
      avatar: this.userAvatarLink,
      fullName: this.fullName,
      phone: this.phone,
      address: this.address,
      email: this.email,
      gender: this.gender,
      birthday: this.birthday
    }

    this.userService.updateUser(this.currentUser.uid, dataChange).then(() => {
      this.notiService.success("Bạn đã cập nhật thông tin thành công")
    }).catch(err => {
      console.log(err)
    })
  }

  logOut() {
    console.log("click log out");
    this.auth.logOut();
  }
}
