var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var RestAPIDocComponent = /** @class */ (function () {
    function RestAPIDocComponent() {
        this.APIS = [];
        this.panelOpenState = true;
        this.panelOpenState = true;
        this.APIS = [
            {
                title: 'Products',
                description: 'Get all the token pairs traded on the exchange',
                rest: 'http://api.wallstrat.com/v1/products/:exchangecode/'
            },
            {
                title: 'Order Book',
                description: 'Get buy and sell side quotes - top of the book and depth of the book',
                rest: 'http://api.wallstrat.com/v1/orderbook/:exchangecode/:symbol'
            },
            {
                title: 'Trades',
                description: 'Get recent trades executed on the exchange',
                rest: 'http://api.wallstrat.com/v1/trade/:exchangecode/:symbol'
            },
            {
                title: 'Best Bid, Best Ask',
                description: 'Get best buy and sell price of a traded instrument',
                rest: 'http://api.wallstrat.com/v1/bb/:exchangecode/:symbol'
            },
            {
                title: 'Ticker',
                description: 'Get ticker for traded pair',
                rest: 'http://api.wallstrat.com/v1/ticker/:exchangecode/:symbol'
            }
        ];
    }
    RestAPIDocComponent.prototype.ngAfterViewInit = function () {
        this.panelOpenState = true;
    };
    RestAPIDocComponent = __decorate([
        Component({
            selector: 'apidoc-rest',
            templateUrl: './restapidoc.component.html',
            styleUrls: ['./restapidoc.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], RestAPIDocComponent);
    return RestAPIDocComponent;
}());
export { RestAPIDocComponent };
//# sourceMappingURL=restapidoc.component.js.map