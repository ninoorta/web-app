import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
// import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTabsModule } from "@angular/material/tabs";

//shared
import { SharedModule } from "../app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
