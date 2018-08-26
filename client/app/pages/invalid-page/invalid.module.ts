import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {InvalidComponent} from './invalid.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    InvalidComponent,
  ],
  exports: [
    InvalidComponent,
  ]
})
export class InvalidHeaderModule { 
}