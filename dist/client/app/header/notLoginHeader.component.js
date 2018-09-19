var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
var NotLoginHeaderComponent = /** @class */ (function () {
    function NotLoginHeaderComponent(elementRef, matIconRegistry) {
        this.elementRef = elementRef;
        this.matIconRegistry = matIconRegistry;
        this.exchanges = ['Gdax', 'Binance', 'Coinone', 'Bitfinex', 'Bitstamp', 'Bitrex', 'Gemini',
            'Hitbtc', 'Kraken', 'Kucoin', 'Luno', 'Okcoin'
        ];
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    NotLoginHeaderComponent.prototype.ngAfterViewInit = function () {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#283649';
    };
    NotLoginHeaderComponent.prototype.ngOnInit = function () {
        // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#283649';
    };
    NotLoginHeaderComponent.prototype.openDropdown = function (e) {
        this.exchangeDropDown.open();
    };
    NotLoginHeaderComponent.prototype.closeDropDown = function (e) {
        this.exchangeDropDown.close();
    };
    __decorate([
        ViewChild('exchangeSelect'),
        __metadata("design:type", Object)
    ], NotLoginHeaderComponent.prototype, "exchangeDropDown", void 0);
    NotLoginHeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './notLoginHeader.component.html',
            styleUrls: ['./notLoginHeader.component.css'],
        }),
        __metadata("design:paramtypes", [ElementRef, MatIconRegistry])
    ], NotLoginHeaderComponent);
    return NotLoginHeaderComponent;
}());
export { NotLoginHeaderComponent };
//# sourceMappingURL=notLoginHeader.component.js.map