import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {ProductsHeaderComponent} from './products.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductsHeaderComponent,
  ],
  exports: [
    ProductsHeaderComponent,
  ]
})
export class ProductsHeaderModule { 
}