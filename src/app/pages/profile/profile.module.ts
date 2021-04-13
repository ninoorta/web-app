import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';

// import this to prevent not receiving matmenutriggerfor
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from "@angular/material/tabs";
import { OrdersComponent } from './components/orders/orders.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ProfileComponent, OrdersComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class ProfileModule { }
