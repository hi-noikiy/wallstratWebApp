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
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
var ExchangesHeaderComponent = /** @class */ (function () {
    function ExchangesHeaderComponent(http) {
        this.http = http;
        this.grid = [];
    }
    ExchangesHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.grid = [];
        this.getProductPairs().subscribe(function (markets) {
            _this.grid = markets;
            console.log(markets);
            for (var _i = 0, markets_1 = markets; _i < markets_1.length; _i++) {
                var market = markets_1[_i];
                var xchCode = market['code'];
                for (var _a = 0, market_1 = market; _a < market_1.length; _a++) {
                    var pair = market_1[_a];
                }
            }
            // 	Object.keys(pairs).forEach(function(key) {
            // 		// let tile = ProductsPairsGrid = {text: key, cols: 2, rows: 1, color: 'lightblue'};
            // 		// tradedpairs.push(tile);
            // for(let pair of pairs[key]){
            // 	this.grid.push({symbols:pair['pairs'].join(), exchangeCode:key, baseCurrency:pair['base_currency']});
            // 	// let quoteSymbol = pair['base_currency'];
            // 	// let pairsForthisQuoteSymbol = pair['symbols']; 
            // }  				
            //   		}.bind(this));
        }, function (err) {
            console.log(err);
        });
    };
    ExchangesHeaderComponent.prototype.getProductPairs = function (data) {
        if (data === void 0) { data = {}; }
        return this.http.get('/api/traded-pairs');
    };
    ExchangesHeaderComponent = __decorate([
        Component({
            selector: 'page-exchanges',
            templateUrl: './exchanges.component.html',
            styleUrls: ['./exchanges.component.css'],
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ExchangesHeaderComponent);
    return ExchangesHeaderComponent;
}());
export { ExchangesHeaderComponent };
//# sourceMappingURL=exchanges.component.js.map