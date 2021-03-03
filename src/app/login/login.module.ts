import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
