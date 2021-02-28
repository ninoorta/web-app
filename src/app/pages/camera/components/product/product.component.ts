import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  scannedCode: string;


  // Product
  productImage: any;
  productName: string;
  productAvailability: number;
  productPrice: number;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("code: ", this.route.snapshot.paramMap.get('productID'))
    this.scannedCode = this.route.snapshot.paramMap.get('productID');
  }

}
