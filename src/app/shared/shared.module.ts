import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/homePages/homePages.component';
import { AboutPagesComponent } from './pages/aboutPages/aboutPages.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contactPages/contact.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';

@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPagesComponent,
    ContactPagesComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePagesComponent,
    AboutPagesComponent,
    ContactPagesComponent,
    SidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
