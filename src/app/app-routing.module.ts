import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/homePages/homePages.component';
import { AboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';

const routes: Routes = [
  {
    path: '',
    component: HomePagesComponent
  },
  {
    path: 'about',
    component: AboutPagesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
