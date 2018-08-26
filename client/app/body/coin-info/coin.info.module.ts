import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {CoinInfoComponent} from './coin.info.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MatGridListModule, FormsModule
  ],
  declarations: [
    CoinInfoComponent
  ],
  exports: [
    CoinInfoComponent
  ]
})
export class CoinInfoModule { 
}