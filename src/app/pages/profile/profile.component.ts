import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../login/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Edit
  isEdit = false;

  // User
  userAvatarPath: any;
  userAvatarLink: any;
  currentUser: firebase.default.User;
  currentUserData: any;

  // Information
  fullName: string;
  gender: number;
  birthday: any;
  phone: any;
  address: string;
  email: string;


  // Report
  totalSpentMoney: number;

  constructor(private db: AngularFirestore,
    private auth: AuthService,
    private userService: UsersService,
    private fireStorage: AngularFireStorage) { }

  ngOnInit(): void {

    this.getCurrentUser();


    // Call all users in collection Users
    // this.db.collection("Users").valueChanges()
    //   .subscribe(data => console.log(data))

    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("font-weight-bold")
    }
  }

  getCurrentUser() {
    this.auth.getUserState().subscribe(user => {
      // If have a current user
      this.currentUser = user;

      this.db.collection("Users").doc(this.currentUser.uid).valueChanges().subscribe(data => {
        this.currentUserData = data;
        console.log("current user Data: ", this.currentUserData)

        // Display this user data
        this.userAvatarLink = this.currentUserData.avatar;
        this.fullName = this.currentUserData.fullName;
        this.address = this.currentUserData.address;
        this.phone = this.currentUserData.phone;
        this.email = this.currentUserData.email;
        this.gender = this.currentUserData.gender;
        this.birthday = this.currentUserData.birthday;
      })
    })

  }

  userChangeAvatar($event) {
    this.userAvatarPath = $event.target.files[0];

    console.log("avatar path: ", this.userAvatarPath)
    this.fireStorage.upload("/userAvatars/" + `avatar-${this.currentUser.uid}`, this.userAvatarPath)
      .then(() => {
        this.fireStorage.storage.ref('/userAvatars/' + `avatar-${this.currentUser.uid}`).getDownloadURL()
          .then(link => {
            this.userAvatarLink = link;
            console.log("link: " + this.userAvatarLink)
          })
      })


  }

  chooseGenderType(type) {
    this.gender = type;
  }


  editMode() {
    this.isEdit = true;

    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.add("font-weight-bold")
    }
  }

  saveChange() {
    console.log("click save change");
    this.isEdit = false;
    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("font-weight-bold")
    }

    let dataChange = {
      avatar: this.userAvatarLink,
      fullName: this.fullName,
      phone: this.phone,
      address: this.address,
      email: this.email,
      gender: this.gender,
      birthday: this.birthday
    }

    this.userService.updateUser(this.currentUser.uid, dataChange)
  }

  logOut() {
    console.log("click log out");
    this.auth.logOut();
  }
}
