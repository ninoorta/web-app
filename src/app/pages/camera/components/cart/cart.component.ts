import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  isHidden: boolean = false;


  products: any;

  productName: string;
  productAmount: number;
  productPrice: number;
  productErr: string;

  totalMoney: number;
  totalProducts: number;
  totalMoneyToShow: string;

  hasError: boolean = false;

  constructor(private location: Location, public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    // let temp = this.dataService.tempData;
    // console.log("data before", temp)
    // this.products = temp;


    // add display none to menu bar bottom
    document.querySelector(".menubar").classList.add("display-none");

    let tempCart = JSON.parse(localStorage.getItem("tempCart"))
    console.log("get tempCart in cart route", tempCart);
    this.products = tempCart
    this.getTotal(this.products);


  }

  ngOnDestroy() {
    // remove display none to menu bar bottom
    document.querySelector(".menubar").classList.remove("display-none");

  }

  goToPayment() {
    if (!this.hasError) {
      localStorage.setItem("totalProducts", JSON.stringify(this.totalProducts))
      localStorage.setItem("totalMoneyToShow", JSON.stringify(this.totalMoneyToShow))
      this.router.navigateByUrl("/pages/camera/cart/payment")
    }
  }

  changeAmount(amountChange, chosenIndex) {
    // console.log("amount input change", amountChange)
    // console.log("this index", chosenIndex)
    if (this.products[chosenIndex].availability < amountChange) {
      this.productErr = `Sản phẩm bạn chọn chỉ còn ${this.products[chosenIndex].availability} sản phẩm`;
      document.getElementById(`product${chosenIndex}`).innerHTML = this.productErr;
      this.hasError = true;
    } else {
      if (amountChange == 0) {
        this.productErr = "Số lượng sản phẩm bạn chọn tối thiểu phải là 1";
        document.getElementById(`product${chosenIndex}`).innerHTML = this.productErr;
        this.hasError = true;
      } else {
        document.getElementById(`product${chosenIndex}`).innerHTML = "";
        // Xét các element chứa lỗi hiện có, nếu còn element có lỗi thì hasError = true
        let dem = 0;
        for (let i = 0; i < this.products.length; i++) {
          if (document.getElementById(`product${i}`).innerHTML == "") {
            dem = dem + 1;
          }
        }
        if (dem == this.products.length) {
          this.hasError = false;
        }
      }
    }

    this.products[chosenIndex].amount = amountChange;
    console.log("current product amount", this.products[chosenIndex].amount)
    this.getTotal(this.products);
    console.log("has error", this.hasError)

  }

  goBack() {
    let code = localStorage.getItem("currentProductCode")
    this.router.navigateByUrl(`/pages/camera/product/${code}`)
  }

  deleteItemWhenClick(index: any) {
    console.log("clicked index", index)
    this.products.splice(index, 1)
    let tempCart = JSON.parse(localStorage.getItem("tempCart"));
    tempCart = this.products;
    localStorage.setItem("tempCart", JSON.stringify(tempCart));
  }


  getTotal(products) {
    this.totalMoney = 0;
    this.totalProducts = 0;
    products.map(product => {
      this.totalMoney += product.price * product.amount;
      this.totalProducts += product.amount;
    })
    console.log("current total products", this.totalProducts)
    // change to currency unit vnd
    this.totalMoneyToShow = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.totalMoney);
  }
}
