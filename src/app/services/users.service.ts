import { Injectable } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private auth: AngularFireAuth,
    private database: AngularFirestore
  ) { }


  getAllUser() {
    return this.database.collection("Users").get();
  }

  updateUser(uid, userData) {
    return this.database.collection("Users").doc(uid).update(userData)
  }
}
