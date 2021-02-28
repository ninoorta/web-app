import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  isDirect: boolean = true;
  isShipping: boolean;

  // Products
  numberOfGoods: number = 0;
  totalMoney: number = 0;


  // Inputs
  addressInput: string;
  recipientName: string;
  recipientPhone: string;
  addressNote: string = "";

  // Selected payment method
  selectedMethod: string = "cod";


  // Conditions
  verifiedData: boolean = false;

  // Errors
  addressError: string;
  nameError: string;
  phoneError: string;


  constructor(private router: Router) { }

  ngOnInit(): void {
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
      this.verifiedData = true;

      // Then move to page done
      // Not finished
      this.router.navigateByUrl('/pages/camera/cart/payment/done', { state: { customerData: data } });
    }
  }

  chooseMethod(type) {
    this.selectedMethod = type == "1" ? "cod" : "transfer";
    console.log("payment method:" + this.selectedMethod);
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

}
