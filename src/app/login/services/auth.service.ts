import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { NotificationsService } from '../../shared/services/noti.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;

  constructor(
    private auth: AngularFireAuth,
    private database: AngularFirestore,
    private router: Router,
    private notiService: NotificationsService
  ) { }

  getUserState() {
    return this.auth.authState;
  }

  createUser(user) {
    this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;
        console.log(userCredential)

        userCredential.user.updateProfile(
          {
            displayName: user.fullName
          }
        );

        this.insertUserData(userCredential)
          .then(() => {
            // Successfully create a user
            this.router.navigate(['/login'])
          })
      })
      .catch((err) => {
        this.eventAuthError.next(err);
      })

  }

  insertUserData(userCredential: firebase.default.auth.UserCredential) {
    return this.database.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      fullName: this.newUser.fullName,
      phone: this.newUser.phone,
      address: this.newUser.address,
    })
  }

  logIn(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
      .catch(err => {
        this.eventAuthError.next(err)
      })
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/pages/profile'])
          console.log("successfully logged in  ", userCredential)
          this.notiService.success("Chào mừng " + userCredential.user.displayName)
        }
      })
  }

  logOut() {
    return this.auth.signOut();
  }

  resetPassword(email: string) {
    return this.auth.sendPasswordResetEmail(email)
      .catch(err => {
        this.eventAuthError.next(err);
      })
      .then(() => {
        console.log("sent email reset password!")
      })
  }


}
