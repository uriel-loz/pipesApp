import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class PrimeNgModule { }
