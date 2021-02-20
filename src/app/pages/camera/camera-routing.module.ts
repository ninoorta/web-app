import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


// components
import { CameraComponent } from "./camera.component";
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: "",
    component: CameraComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/payment',
    component: PaymentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraRoutingModule { }
