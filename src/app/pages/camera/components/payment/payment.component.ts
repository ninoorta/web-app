import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { AuthService } from '../../../../login/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore'



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  isDirect: boolean = true;
  isShipping: boolean;

  // Products
  totalProducts: number = 0;
  totalMoneyToShow: number = 0;


  // Inputs
  addressInput: string;
  recipientName: string;
  recipientPhone: string;
  addressNote: string = "";

  // Selected payment method
  selectedMethod: string = "cod";


  // Conditions
  isDone: boolean = false;
  // Errors
  addressError: string;
  nameError: string;
  phoneError: string;
  selectStoreErr: string;

  tempCart = [];
  storesToChoose = [];

  extraCheck = false;

  constructor(private router: Router,
    public dataService: DataService,
    private authService: AuthService,
    private db: AngularFirestore) { }

  ngOnInit(): void {

    this.totalMoneyToShow = JSON.parse(localStorage.getItem("totalMoneyToShow"))
    this.totalProducts = JSON.parse(localStorage.getItem("totalProducts"))

    if (!this.isDirect) {
      this.authService.getUserState().subscribe(user => {
        if (user) {
          console.log("has user", user)

          this.db.collection("Users").doc(user.uid).valueChanges().subscribe(userData => {
            console.log("current user data: ", userData)

            this.addressInput = userData["address"];
            this.recipientName = userData["fullName"];
            this.recipientPhone = userData["phone"];
          })
        }
      })

    } else {
      this.tempCart = JSON.parse(localStorage.getItem("tempCart"));
      console.log("here tempCart", this.tempCart)

      for (let i = 0; i < this.tempCart.length; i++) {
        // push store in product of tempCart
        for (let j = 0; j < this.tempCart[i].selectedStores.length; j++) {
          let store = this.tempCart[i].selectedStores[j];
          this.storesToChoose.push(store)
        }
      }

      // remove duplicate 
      this.storesToChoose = Array.from(new Set(this.storesToChoose.map(a => a.id)))
        .map(id => {
          return this.storesToChoose.find(a => a.id === id)
        })
      // final storesToChoose
      // sort by name
      this.storesToChoose.sort((a, b) => (a.ten > b.ten) ? 1 : ((b.ten > a.ten) ? -1 : 0))
      console.log("final stores", this.storesToChoose)
    }

  }


  clickChange(event: any): void {
    if (event.target.className.indexOf("direct") !== -1) {
      this.isDirect = true;
      this.isShipping = false;
    } else {
      this.isShipping = true;
      this.isDirect = false;
    }
    // console.log("this is clicked:" + event.target.className);
    // Then
    this.closeChange();

  }

  closeChange(): void {
    console.log("click close ChangeContent")
    document.querySelector(".changeContent").classList.add("closedContent");
  }

  changeOption(): void {
    console.log("click change option")
    document.querySelector(".changeContent").classList.remove("closedContent");
  }

  changeStore(event) {
    console.log("change store", event);
    let labels = document.getElementsByClassName("select-store__label");

    for (let i = 0; i < labels.length; i++) {
      labels[i]["control"].checked = false;
    }

    // get selected storeID
    let currentStoreID = event.target.htmlFor;
    console.log(currentStoreID)
    let stores;
    for (let i = 0; i < this.tempCart.length; i++) {
      stores = this.tempCart[i].selectedStores;
      let tempArr = []
      for (let j = 0; j < stores.length; j++) {
        tempArr.push(stores[j]["id"])
      }
      console.log(tempArr)
      if (tempArr.indexOf(currentStoreID) == -1) {
        console.log("found", i)
        // this is index of product doesn't have in selected Store
        this.selectStoreErr = `Cửa hàng bạn chọn hiện đang không có sản phẩm ${this.tempCart[i].name}`

        if (this.extraCheck) {
          this.isDone = true;
        } else {
          this.isDone = false;
        }
        break;
      } else {
        this.selectStoreErr = ""
        this.isDone = true;
      }
    }

  }

  acceptExtra(event) {
    setTimeout(() => {
      if (!event.target.control.checked && !this.isDone) {
        // console.log("doesn't accept")
        this.isDone = false;
        this.extraCheck = false;
      } else {
        // console.log("accept")
        this.isDone = true;
        this.extraCheck = true;
      }

    }, 1)
  }

  checkData() {

    console.log("clicked check Data")

    this.addressError = "";
    this.nameError = "";
    this.phoneError = "";

    // Tạo errors
    if (!this.checkValidText(this.addressInput)) {
      this.addressError = "(Hãy kiểm tra lại địa chỉ của bạn)";
    }
    if (!this.checkValidText(this.recipientName)) {
      this.nameError = "(Tên người nhận không hợp lệ)";
    }
    if (!this.checkValidPhoneNumber(this.recipientPhone)) {
      this.phoneError = "(Số điện thoại không hợp lệ)";
    }

    // valid inputs
    this.addressInput = this.addressInput.trim();
    this.recipientName = this.recipientName.trim();
    this.recipientPhone = this.recipientPhone.trim();

    if (this.checkValidText(this.addressNote)) {
      this.addressNote = this.addressNote.trim();
    }

    if (this.checkValidPhoneNumber(this.recipientPhone)
      && this.checkValidText(this.addressInput)
      && this.checkValidText(this.recipientName)
    ) {
      var data = {
        address: this.addressInput,
        name: this.recipientName,
        phone: this.recipientPhone,
        note: this.addressNote,
        method: this.selectedMethod
      }


      console.log("finish checked:", data)
      this.isDone = true;

      // Then move to page done
      // Not finished
      this.router.navigateByUrl('/pages/camera/cart/payment/done', { state: { customerData: data } });
    }
  }

  chooseMethod(type, event) {
    this.selectedMethod = type == "1" ? "cod" : "transfer";
    console.log("payment method:" + this.selectedMethod);

    document.getElementsByName("option").forEach(option => {
      option["checked"] = false;
    })
    event.target.checked = true;
  }

  checkValidPhoneNumber(phoneNumber) {
    let valid = /((09|01[2|6|8|9])+([0-9]{8}))|((03[2|3|5|6|7|8|9]|08[1|2|3|4|5]|07[0|6|7|8|9])+([0-9]{7}))\b\b/g
    return valid.test(phoneNumber)
  }

  checkValidText(text) {
    if (text == "" || text == " " || text == "null" || text == "undefined" || text == null || text == undefined) {
      return false
    }
    return true
  }

  checkToCreateOrder() {
    if (this.isDone) {
      console.log("ok")


      let tempID = this.db.createId()
      let order = {
        id: tempID,
        products: this.tempCart,
        storeToPick: "",
        method: this.isDirect ? "direct" : "shipping",
      }
    }
  }

}
