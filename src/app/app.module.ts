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

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { FormsModule } from "@angular/forms";

//shared
import { SharedModule } from "../app/shared/shared.module";


// Using loader 
import { LoaderService } from "./shared/services/loader.service";
import { LoaderInterceptor } from "./shared/interceptors/loader.interceptor";
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule
} from "ngx-ui-loader";

import { HttpClientModule } from '@angular/common/http';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#d5e7f7",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#d5e7f7",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};

// Fix error not knowing css
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from "@angular/common";

// dialog
import { MatDialogModule } from "@angular/material/dialog";

// snackbar for noti
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAz--9MYGqCLLNwNDK-S_xp5NxJL_KwiyU",
        authDomain: "mindx-chat-efd7a.firebaseapp.com",
        databaseURL: "https://mindx-chat-efd7a.firebaseio.com",
        projectId: "mindx-chat-efd7a",
        storageBucket: "mindx-chat-efd7a.appspot.com",
        messagingSenderId: "488630916249",
        appId: "1:488630916249:web:2a017e25bd1abb29b55408",
        measurementId: "G-9P4M4F5VHE"
      }
    ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSnackBarModule

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
