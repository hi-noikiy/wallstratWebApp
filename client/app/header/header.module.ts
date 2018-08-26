import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*
Feature modules import CommonModule instead of BrowserModule, 
which is only imported once in the root module. 
CommonModule only contains information for common directives such as ngIf and ngFor which are needed in most templates, 
whereas BrowserModule configures the Angular app for the browser which needs to be done only once. 
*/
import { CommonModule } from '@angular/common';

import {NotLoginHeaderComponent} from './notLoginHeader.component';
import {LoginHeaderComponent} from './loginHeader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotLoginHeaderComponent,
    LoginHeaderComponent
  ],
  exports: [
    NotLoginHeaderComponent,
    LoginHeaderComponent
  ]
})
export class HeaderModule { 
}