import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {BodyComponent} from './body.component';
import {ProductModule} from './products/product.module';
import {CurrenciesModule} from './currencies/currencies.module';
import {CoinInfoModule} from './coin-info/coin.info.module';
import {CoinGraphModule} from './coin-graph/coin.graph.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    CurrenciesModule,
    CoinInfoModule,
    CoinGraphModule
  ],
  declarations: [
    BodyComponent,
  ],
  exports: [
    BodyComponent,
  ]
})
export class BodyModule { 
}