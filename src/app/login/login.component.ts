import { AfterViewInit, Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';


import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import firebase from 'firebase';
import { AuthService } from './services/auth.service';

import { WindowService } from './services/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isOTP: boolean = true;
  windowRef: any;
  phoneNumber: string = "+84";

  email: string = "";
  password: any;
  authError: any;

  otp: string;


  constructor(
    public dialog: MatDialog,
    private authMethod: AngularFireAuth,
    private database: AngularFirestore,
    private router: Router,
    private windowService: WindowService,
    private auth: AuthService
  ) {
    this.windowRef = this.windowService.windowRef;
  }

  ngOnInit(): void {
    this.windowRef = this.windowService.windowRef;

    this.auth.eventAuthError$.subscribe(data => {
      console.log("err log", data)
      this.authError = data;
    })
  }

  logIn() {
    console.log("click login");
    this.auth.logIn(this.email, this.password)
  }

  openForgetPass() {
    this.dialog.open(ForgetPasswordComponent, { autoFocus: false }).afterClosed().subscribe(() => {
      this.authError = "";
    })
  }



}
