import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    MenuModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class PrimeNgModule { }
