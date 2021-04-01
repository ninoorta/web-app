import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';

// import this to prevent not receiving matmenutriggerfor
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from "@angular/material/tabs";
import { OrdersComponent } from './components/orders/orders.component';


@NgModule({
  declarations: [ProfileComponent, OrdersComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    MatTabsModule,
    MatMenuModule
  ]
})
export class ProfileModule { }
