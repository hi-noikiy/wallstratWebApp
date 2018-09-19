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
import { Product } from '../../models/product';
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.products = [
            new Product('Crypto Market Data Solutions', 'Single API to consume market data', '', [
                'Get normalized data', 'All major exchange connectivity ', 'Historical market data',
                'Rest, Websocket Feed API ...'
            ]),
            // new Product('Trading toolkit', 'Private account API, providing trading features', '',
            // 	[	
            // 		'Authentication API', 'Trading API - fill, deposit, withdraw etc.'
            // 	]
            // 	),
            new Product('Analytics Tools', 'High Performance Analytics', '', [
                'Time series analysis', 'Trading Signals', 'price comparisons'
            ]),
        ];
        // this.product_itr = 0;
        // this.product = this.products[this.product_itr];
        // setInterval(this.changeProduct.bind(this), 4000);
    }
    ProductComponent.prototype.changeProduct = function () {
        this.product = this.products[this.product_itr++];
        if (this.products.length <= this.product_itr)
            this.product_itr = 0;
        //this.product_itr++;
    };
    ProductComponent = __decorate([
        Component({
            selector: 'product-list',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());
export { ProductComponent };
//# sourceMappingURL=product.component.js.map