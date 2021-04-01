import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {


  scannedCode: string;

  productsInCart: number = 0;
  selectedProductNumber: number = 1;

  // Product
  productImage: any;
  productName: string;
  productAvailability: number;
  productPrice: number;
  productPriceToShow: string;


  // Store
  stores = [];

  tempCart: any;

  currentProduct: any;

  hasThisProductInCart: boolean = false;
  currentProductAvailableAmount: number;

  // Err
  amountErr: string;

  constructor(private route: ActivatedRoute,
    private db: AngularFirestore,
    private router: Router,
    public dataService: DataService) {

  }

  ngOnInit(): void {

    // console.log("has data before", this.dataService.tempData)

    console.log("code: ", this.route.snapshot.paramMap.get('productID'))
    this.scannedCode = this.route.snapshot.paramMap.get('productID');

    localStorage.setItem("currentProductCode", this.scannedCode)
    this.productImage = "";
    this.productName = "";
    this.productAvailability = 0;
    this.productPrice = 0;

    if (this.scannedCode) {
      this.getScannedProductData(this.scannedCode)
    }


  }

  ngOnDestroy() {

  }

  subtractProduct() {
    this.selectedProductNumber = this.selectedProductNumber - 1;
    if (this.selectedProductNumber < 1) {
      this.selectedProductNumber = 1;
    }
  }

  addProduct() {
    this.selectedProductNumber = this.selectedProductNumber + 1;
  }

  addToCart() {
    console.log("--------------------------------------------------");

    console.log("current selected number", this.selectedProductNumber)
    console.log("has product in cart?", this.hasThisProductInCart)
    console.log("current available", this.currentProductAvailableAmount)
    console.log("currentProduct", this.currentProduct)

    // Nếu chọn quá số sản phẩm khả dụng và sản phẩm hiện tại chưa có trong giỏ hàng
    if (this.selectedProductNumber > this.currentProductAvailableAmount && !this.hasThisProductInCart) {
      this.amountErr = "Bạn không thể đặt quá số lượng hiện có";
      this.selectedProductNumber = this.currentProductAvailableAmount;

    } else if (this.hasThisProductInCart) {
      // Nếu sản phẩm hiện tại có trong giỏ hàng nhưng chọn quá số lượng khả dụng
      if (this.selectedProductNumber > this.currentProductAvailableAmount) {
        this.amountErr = `Bạn chỉ có thể đặt thêm tối đa ${this.currentProductAvailableAmount} sản phẩm`;
        this.selectedProductNumber = this.currentProductAvailableAmount;
      } else {
        // Sản phẩm hiện tại có trong giỏ hàng nhưng số lượng chọn là 0
        if (this.selectedProductNumber == 0) {
          this.amountErr = "Số lượng sản phẩm tối thiểu là 1";
          this.selectedProductNumber = 1;
        } else {
          // Sản phẩm hiện tại có trong giỏ hàng và số lượng chọn trong khoảng cho phép
          let tempCart = JSON.parse(localStorage.getItem("tempCart"))
          console.log("has product", tempCart)
          for (let i = 0; i < tempCart.length; i++) {
            if (tempCart[i].code == this.currentProduct.code) {
              // tempCart[i].amount = tempCart[i].amount + this.currentProduct.amount;
              this.currentProduct.amount = tempCart[i].amount
            }
          }

          this.amountErr = "";
          this.productsInCart = this.productsInCart + this.selectedProductNumber;
          this.currentProductAvailableAmount = this.currentProductAvailableAmount - this.selectedProductNumber;
          this.currentProduct["amount"] = this.currentProduct["amount"] + this.selectedProductNumber;
          console.log("selected product number", this.selectedProductNumber)
          console.log("current product amount when have this product in cart", this.currentProduct["amount"])


          // let tempCart = JSON.parse(localStorage.getItem("tempCart"))
          // console.log("has product", tempCart)

          for (let i = 0; i < tempCart.length; i++) {
            if (tempCart[i].code == this.currentProduct.code) {
              // tempCart[i].amount = tempCart[i].amount + this.currentProduct.amount;
              tempCart[i].amount = this.currentProduct.amount
            }
          }
          localStorage.setItem("tempCart", JSON.stringify(tempCart))
          console.log("tempCart right now have product in cart", tempCart)
        }

      }

    } else if (!this.hasThisProductInCart && this.selectedProductNumber <= this.currentProductAvailableAmount) {
      // Nếu chưa có trong giỏ hàng và chọn trong khoảng khả dụng
      console.log("not In Cart")
      if (this.selectedProductNumber <= 0) {
        this.amountErr = "Số lượng sản phẩm tối thiểu là 1";
        this.selectedProductNumber = 1;
      } else {
        this.amountErr = "";
        this.productsInCart += this.selectedProductNumber;
        this.currentProductAvailableAmount -= this.selectedProductNumber;

        // Add this selected product and it's amount
        // Không có sản phẩm hiện tại trong giỏ hàng
        this.currentProduct["amount"] = this.currentProduct.amount + this.selectedProductNumber;
        console.log("current product amount when not have this product in cart", this.currentProduct["amount"])

        let tempCart = JSON.parse(localStorage.getItem("tempCart"))

        if (!tempCart) {
          // Không có sản phẩm nào trong giỏ hàng
          console.log("doesn't have in tempCart")
          let tempCart = [];
          tempCart.push(this.currentProduct)
          localStorage.setItem("tempCart", JSON.stringify(tempCart))
          this.hasThisProductInCart = true;
          console.log("now have this product in cart", this.hasThisProductInCart)
        } else {
          // Không có sản phẩm này trong giỏ hàng nhưng trong giỏ hàng có sản phẩm khác
          console.log("have something in cart but not this product")
          tempCart.push(this.currentProduct);
          localStorage.setItem("tempCart", JSON.stringify(tempCart))
          this.hasThisProductInCart = true;
        }
      }

    }

  }

  buyNow() {
    this.addToCart();
    this.router.navigateByUrl("/pages/camera/cart/payment")
  }

  getScannedProductData(barcode) {
    // Best for query
    this.db.collection("Products", ref => ref.where("code", "==", barcode)).valueChanges().subscribe(data => {
      console.log("this product is available in store", data)

      if (data.length == 0) {
        console.log("has no data");
        this.checkProductInCart();
      } else {
        this.productImage = data[0]["image"];
        this.productAvailability = data[0]["availability"];
        this.productName = data[0]["name"];
        this.productPrice = data[0]["price"];

        // change to currency vnd unit
        this.productPriceToShow = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.productPrice)

        data[0]["code"] = barcode;
        data[0]["amount"] = 0;
        data[0]["priceToShow"] = this.productPriceToShow

        this.currentProduct = data[0];
        this.currentProductAvailableAmount = this.currentProduct.availability;

        this.checkProductInCart()

        this.stores = this.currentProduct.selectedStores
        this.appendAddressForStores(this.stores)

      }

    })
  }

  appendAddressForStores(arr) {
    // first, get this store data with its id
    if (arr) {
      this.db.collection("Stores").get().subscribe(dataJustIDs => {

        this.db.collection("Stores").valueChanges().subscribe(list => {
          for (let i = 0; i < list.length; i++) {
            list[i]["id"] = dataJustIDs.docs[i].id
          }

          // console.log("new data", list)

          // Quét từng cửa hàng , nếu trùng ID thì tạo thêm key address
          for (let j = 0; j < list.length; j++) {
            for (let k = 0; k < arr.length; k++) {
              if (arr[k].id == list[j]["id"]) {
                arr[k]["address"] = list[j]["chiTiet"] + ", " + list[j]["xa"] + ", "
                  + list[j]["huyen"] + ", " + list[j]["thanhPho"]
              }
            }
          }

          this.stores = arr
        })

      })
    }

  }
  moveToCart() {
    this.router.navigateByUrl("/pages/camera/cart")
  }

  deleteCart() {
    localStorage.removeItem("tempCart");
    this.productsInCart = 0;
    this.hasThisProductInCart = false;
    this.amountErr = "";
    this.selectedProductNumber = 1;
    this.currentProductAvailableAmount = this.currentProduct.availability
  }

  checkProductInCart() {
    // Get tempCart when have current product data
    this.tempCart = JSON.parse(localStorage.getItem("tempCart"))
    if (this.tempCart) {
      if (this.tempCart.length > 0) {
        console.log("has tempCart", this.tempCart)

        for (let i = 0; i < this.tempCart.length; i++) {
          //  Add product amount in tempCart to productsInCart
          this.productsInCart = this.productsInCart + this.tempCart[i].amount;

          if (this.tempCart[i].code == this.scannedCode) {
            this.hasThisProductInCart = true;
            this.currentProductAvailableAmount = this.tempCart[i].availability - this.tempCart[i].amount;
            console.log("available in scan function", this.currentProductAvailableAmount)
          }
        }
      }


    } else {
      console.log("doesn't have tempCart")
    }
  }
}
