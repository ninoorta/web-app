import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HomeComponent } from './home/home.component';
// import { CameraComponent } from './camera/camera.component';
// import { ProfileComponent } from './profile/profile.component';

import {PagesRoutingModule} from './page-routing.module';
import {PagesComponent} from './pages.component';

//shared
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
