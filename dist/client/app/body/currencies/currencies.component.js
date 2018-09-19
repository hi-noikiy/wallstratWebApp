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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MatTableDataSource } from '@angular/material';
var CurrenciesComponent = /** @class */ (function () {
    function CurrenciesComponent(http) {
        this.http = http;
        this.httpHeaders = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
    }
    CurrenciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCoinTable().subscribe(function (cointable) {
            // console.log("allCoins ", cointable)
            var ELEMENT_DATA = [];
            for (var _i = 0, cointable_1 = cointable; _i < cointable_1.length; _i++) {
                var row = cointable_1[_i];
                var datarow = {};
                datarow.price = parseFloat(row['price']).toFixed(4);
                datarow.bid = parseFloat(row['bid_price']).toFixed(4);
                datarow.ask = parseFloat(row['ask_price']).toFixed(4);
                datarow.symbol = row['symbol'];
                // console.log("change " ,  row['symbol'] , row['percentage_change']);
                datarow.change = parseFloat(row['percentage_change']).toFixed(4);
                datarow.name = row['name'];
                // console.log("row: ", datarow);
                ELEMENT_DATA.push(datarow);
            }
            _this.displayedColumns = ['symbol', 'price', 'bid', 'ask', 'change', 'name'];
            _this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        }, function (err) {
            console.log(err);
        });
    };
    CurrenciesComponent.prototype.getCoinTable = function (data) {
        if (data === void 0) { data = {}; }
        return this.http.get('/api/coin-table');
    };
    CurrenciesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CurrenciesComponent = __decorate([
        Component({
            selector: 'currencies-list',
            templateUrl: './currencies.component.html',
            styleUrls: ['./currencies.component.css'],
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], CurrenciesComponent);
    return CurrenciesComponent;
}());
export { CurrenciesComponent };
//# sourceMappingURL=currencies.component.js.map