import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { NotificationsService } from '../../../shared/services/noti.service';

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
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
      console.log("err:" + data)
    })
  }

  closeForgetPass() {
    this.dialogRef.close();
  }

  sendResetPass() {
    firebase.auth().languageCode = "en";
    this.auth.resetPassword(this.email).finally(() => {
      // show noti success and close dialog
      this.notiService.success("Đã gửi email reset mật khẩu!")
      this.closeForgetPass();
    })
  }
}
