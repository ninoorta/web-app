import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  state$: Observable<object>;

  constructor(public activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    console.log("done")
    localStorage.clear();

  }

}
