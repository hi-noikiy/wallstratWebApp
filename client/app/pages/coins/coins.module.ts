import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {CoinsHeaderComponent} from './coins.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CoinsHeaderComponent,
  ],
  exports: [
    CoinsHeaderComponent,
  ]
})
export class CoinsHeaderModule { 
}