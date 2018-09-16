import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

import {NotLoginHeaderComponent} from './notLoginHeader.component';
import {LoginHeaderComponent} from './loginHeader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, MatSelectModule, MatIconModule,
  ],
  declarations: [
    NotLoginHeaderComponent,
    LoginHeaderComponent
  ],
  exports: [
    NotLoginHeaderComponent,
    LoginHeaderComponent
  ],
  providers: [
    MatIconRegistry
  ]
})
export class HeaderModule { 
}