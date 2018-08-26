import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {APIDocHeaderComponent} from './apidoc.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    APIDocHeaderComponent,
  ],
  exports: [
    APIDocHeaderComponent,
  ]
})
export class APIDocHeaderModule { 
}