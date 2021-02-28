import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Angular materials
// import { MatTabsModule } from "@angular/material/tabs";
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButton, MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from "@angular/material/icon";

// ---
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// --


import { FormsModule } from "@angular/forms";

//shared
import { SharedModule } from "../app/shared/shared.module";


// Using loader 
import { LoaderService } from "./shared/services/loader.service";
import { LoaderInterceptor } from "./shared/interceptors/loader.interceptor";

// Fix error not knowing css
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from "@angular/common";

// dialog
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule

  ],
  providers: [
    LoaderService,
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: APIInterceptor,
    //   multi: true,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
