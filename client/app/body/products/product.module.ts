import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {ProductComponent} from './product.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,MatCardModule, MatButtonModule,RouterModule
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