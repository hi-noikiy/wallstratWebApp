import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExchangeAPIDocComponent} from './xchcodes.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,MatListModule,MatToolbarModule,
  ],
  declarations: [
    ExchangeAPIDocComponent,
  ],
  exports: [
    ExchangeAPIDocComponent,
  ]
})
export class ExchangeAPIDocModule { 
}