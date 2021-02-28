import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Edit
  isEdit = false;

  // User
  userAvatarString: any;

  // Information
  firstName: string;
  lastName: string;
  gender: number;
  birthday: any;
  phone: any;
  address: string;
  email: string;






  constructor() { }

  ngOnInit(): void {

    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("font-weight-bold")
    }
  }

  userChangeAvatar(files: File) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.userAvatarString = reader.result;
      console.log("avatar String: ", reader.result)
    };
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
    // finish when connecting api
    console.log("click save change");
    this.isEdit = false;

    let inputs = document.querySelectorAll(".input-text");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("font-weight-bold")
    }
  }

  logOut() {

  }
}
