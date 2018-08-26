import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {ProductComponent} from './product.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,MatCardModule
  ],
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { 
}