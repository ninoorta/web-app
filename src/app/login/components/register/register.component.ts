import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { NgForm } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService, private test: AngularFirestore) { }

  ngOnInit(): void {
    // console.log('test', this.test.collection('Users').get());

    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }

  createUser(form) {
    console.log("click register button");
    console.log("form value: " + form.value)
    this.auth.createUser(form.value);
  }

}
