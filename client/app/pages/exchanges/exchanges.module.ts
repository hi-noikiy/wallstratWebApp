import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {ExchangesHeaderComponent} from './exchanges.component';

@NgModule({
  imports: [
    CommonModule,
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