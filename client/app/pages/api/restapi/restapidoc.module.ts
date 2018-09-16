import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {RestAPIDocComponent} from './restapidoc.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,MatExpansionModule,MatToolbarModule,
  ],
  declarations: [
    RestAPIDocComponent,
  ],
  exports: [
    RestAPIDocComponent,
  ]
})
export class RestAPIDocModule { 
}