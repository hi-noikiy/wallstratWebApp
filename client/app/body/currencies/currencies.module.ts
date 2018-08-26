import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';

import {CurrenciesComponent} from './currencies.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule, MatInputModule, MatTableModule,
  ],
  declarations: [
    CurrenciesComponent
  ],
  exports: [
    CurrenciesComponent
  ]
})
export class CurrenciesModule { 
}