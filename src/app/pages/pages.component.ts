import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `
      <div class="d-flex main-page">
        <div class="main-page-content">
            <div class="main-page-table">
                <router-outlet></router-outlet>
            </div>
        </div>
        <div class="menu-bar">
            <app-menu-bar> </app-menu-bar>
        </div>
    </div>
  
  `
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
