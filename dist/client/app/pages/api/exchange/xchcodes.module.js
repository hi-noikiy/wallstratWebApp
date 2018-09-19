var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeAPIDocComponent } from './xchcodes.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
var ExchangeAPIDocModule = /** @class */ (function () {
    function ExchangeAPIDocModule() {
    }
    ExchangeAPIDocModule = __decorate([
        NgModule({
            imports: [
                CommonModule, MatListModule, MatToolbarModule,
            ],
            declarations: [
                ExchangeAPIDocComponent,
            ],
            exports: [
                ExchangeAPIDocComponent,
            ]
        })
    ], ExchangeAPIDocModule);
    return ExchangeAPIDocModule;
}());
export { ExchangeAPIDocModule };
//# sourceMappingURL=xchcodes.module.js.map