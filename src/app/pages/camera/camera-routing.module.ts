import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


// components
import { ProductComponent } from "./components/product/product.component";
import { CameraComponent } from "./camera.component";
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DoneComponent } from './components/done/done.component';

const routes: Routes = [
  {
    path: "",
    component: CameraComponent,
  },
  {
    path: "product/:productID",
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/payment',
    component: PaymentComponent,
  },
  {
    path: 'cart/payment/done',
    component: DoneComponent,
  },
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraRoutingModule { }
