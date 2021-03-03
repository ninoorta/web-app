import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isOTP: boolean = true;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openForgetPass() {
    this.dialog.open(ForgetPasswordComponent);
  }

}
