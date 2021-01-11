import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module';
import {CameraComponent} from './camera.component';
import {CameraRoutingModule} from './camera-routing.module';

@NgModule({
  declarations: [CameraComponent],
  imports: [
    CommonModule,
    SharedModule,
    CameraRoutingModule
  ]
})
export class CameraModule { }
