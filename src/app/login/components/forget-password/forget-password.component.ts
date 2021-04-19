import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { NotificationsService } from '../../../shared/services/noti.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  email: any = "";
  authError: any = "";
  isSendSuccessfully: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ForgetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService,
    private angularFireAuth: AngularFireAuth,
    private notiService: NotificationsService
  ) { }

  ngOnInit(): void {
    // this.auth.eventAuthError$.subscribe(data => {
    //   if (data["message"].includes("signInWithEmailAndPassword ")) {
    //     this.authError = "";
    //   }
    //   this.authError = data;
    //   console.log("err:" + data)
    // })
  }

  closeForgetPass() {
    this.dialogRef.close();
  }

  sendResetPass() {
    if (this.validateEmail(this.email)) {
      firebase.auth().languageCode = "en";
      this.authError = "";
      this.auth.resetPassword(this.email).then(() => {
        this.auth.eventAuthError$.subscribe(data => {
          console.log("has err?", data["message"])
          if (data["message"]) {
            this.authError = data["message"];

          } else {
            this.authError = "";
            // show noti success and close dialog
            this.notiService.success("Đã gửi email reset mật khẩu!")
            this.closeForgetPass();
          }
        }).unsubscribe();
      })
    } else {
      this.authError = "Email không hợp lệ"
    }




  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}


