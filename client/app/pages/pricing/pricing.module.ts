import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {PricingHeaderComponent} from './pricing.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PricingHeaderComponent,
  ],
  exports: [
    PricingHeaderComponent,
  ]
})
export class PricingHeaderModule { 
}