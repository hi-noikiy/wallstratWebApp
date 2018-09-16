import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {WSSAPIDocComponent} from './wssapidoc.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    WSSAPIDocComponent,
  ],
  exports: [
    WSSAPIDocComponent,
  ]
})
export class WSSAPIDocModule { 
	
}