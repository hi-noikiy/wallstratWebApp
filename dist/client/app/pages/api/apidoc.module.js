var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIDocHeaderComponent } from './apidoc.component';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { ExchangeAPIDocModule } from './exchange/xchcodes.module';
import { RestAPIDocModule } from './restapi/restapidoc.module';
import { WSSAPIDocModule } from './wssapi/wssapidoc.module';
import { APIDocRoutingModule } from './apidoc.routing';
var APIDocHeaderModule = /** @class */ (function () {
    function APIDocHeaderModule() {
    }
    APIDocHeaderModule = __decorate([
        NgModule({
            imports: [
                CommonModule, MatSidenavModule, MatListModule, ExchangeAPIDocModule,
                RestAPIDocModule, WSSAPIDocModule, APIDocRoutingModule
            ],
            declarations: [
                APIDocHeaderComponent,
            ],
            exports: [
                APIDocHeaderComponent,
            ]
        })
    ], APIDocHeaderModule);
    return APIDocHeaderModule;
}());
export { APIDocHeaderModule };
//# sourceMappingURL=apidoc.module.js.map