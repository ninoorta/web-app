import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule)
      },

      {
        path: 'camera',
        loadChildren: () => import('./camera/camera.module')
          .then(m => m.CameraModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module')
          .then(m => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: 'camera',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
