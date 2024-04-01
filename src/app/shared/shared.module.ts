import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/homePages/homePages.component';
import { AboutPagesComponent } from './pages/aboutPages/aboutPages.component';

@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePagesComponent,
    AboutPagesComponent
  ]
})
export class SharedModule { }
