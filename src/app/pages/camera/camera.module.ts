import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { CameraRoutingModule } from './camera-routing.module';
import { MatDialogModule } from '@angular/material/dialog';


import { CameraComponent } from './camera.component';
import { ProductComponent } from './product/product.component';

import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [CameraComponent, ProductComponent, CartComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    CameraRoutingModule,
    FormsModule,
    MatDialogModule
  ]
})
export class CameraModule { }
