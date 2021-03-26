import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: firebase.default.User;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        // get current user using app
        console.log("user: ", user)
      })

  }

  logIn() {
    this.router.navigate(['/login'])
  }

  logOut() {
    this.auth.logOut();
  }

  register() {
    this.router.navigate(['/register'])
  }

}
