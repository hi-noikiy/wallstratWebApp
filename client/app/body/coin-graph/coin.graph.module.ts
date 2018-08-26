import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoinGraphComponent} from './coin.graph.component';
import {ChartsModule} from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,ChartsModule, FormsModule
  ],
  declarations: [
    CoinGraphComponent
  ],
  exports: [
    CoinGraphComponent
  ]
})
export class CoinGraphModule { 
}