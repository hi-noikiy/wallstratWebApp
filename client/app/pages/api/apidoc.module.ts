import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {APIDocHeaderComponent} from './apidoc.component';
import {MatSidenavModule, MatListModule} from '@angular/material';

import {ExchangeAPIDocModule} from './exchange/xchcodes.module';
import {RestAPIDocModule} from './restapi/restapidoc.module';
import {WSSAPIDocModule} from './wssapi/wssapidoc.module';

import {APIDocRoutingModule} from './apidoc.routing';

@NgModule({
  imports: [
    CommonModule,MatSidenavModule,MatListModule,ExchangeAPIDocModule, 
    RestAPIDocModule,WSSAPIDocModule,APIDocRoutingModule
  ],
  declarations: [
    APIDocHeaderComponent,
  ],
  exports: [
    APIDocHeaderComponent,
  ]
})
export class APIDocHeaderModule { 
}