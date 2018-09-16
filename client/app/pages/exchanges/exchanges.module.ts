import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {ExchangesHeaderComponent} from './exchanges.component';
// import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule, MatCardModule
  ],
  declarations: [
    ExchangesHeaderComponent,
  ],
  exports: [
    ExchangesHeaderComponent,
  ]
})
export class ExchangesHeaderModule { 
}