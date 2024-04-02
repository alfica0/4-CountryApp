import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/homePages/homePages.component';
import { AboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';
import { ContactPagesComponent } from './shared/pages/contactPages/contact.component';

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
    path: 'contact',
    component: ContactPagesComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
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
