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
import { EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { QueryService } from '../services/query.service';
var CoinInfoComponent = /** @class */ (function () {
    function CoinInfoComponent(http, queryService) {
        this.http = http;
        this.queryService = queryService;
        this.updateQuerySymbol = new EventEmitter();
        this.buyBookHeader = [
            { text: 'Price', cols: 1, rows: 1, color: '#e6e6e6' },
            { text: 'Size', cols: 1, rows: 1, color: '#e6e6e6' },
            { text: 'Side', cols: 1, rows: 1, color: '#e6e6e6' },
        ];
        this.sellBookHeader = [
            { text: 'Price', cols: 1, rows: 1, color: '#e6e6e6' },
            { text: 'Size', cols: 1, rows: 1, color: '#e6e6e6' },
            { text: 'Side', cols: 1, rows: 1, color: '#e6e6e6' },
        ];
        this.booksBuy = [];
        this.booksSell = [];
        this.orderBookMap = new Map();
        this.bookSymbols = new Array();
        this.updateOpenOrder();
    }
    CoinInfoComponent.prototype.ngOnInit = function () {
    };
    CoinInfoComponent.prototype.getOpenOrder = function (data) {
        if (data === void 0) { data = {}; }
        // let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get('/api/open-order');
    };
    CoinInfoComponent.prototype.displayBook = function (symbol) {
        this.booksBuy = [];
        this.booksSell = [];
        for (var _i = 0, _a = this.orderBookMap.get(symbol); _i < _a.length; _i++) {
            var row = _a[_i];
            if (row['side'] == 'B') {
                this.booksBuy.push({ text: row['price'], cols: 1, rows: 1, color: '#ffb366' });
                this.booksBuy.push({ text: row['size'], cols: 1, rows: 1, color: '#ffb366' });
                this.booksBuy.push({ text: row['side'], cols: 1, rows: 1, color: '#2eb82e' });
            }
            else {
                this.booksSell.push({ text: row['price'], cols: 1, rows: 1, color: '#ffb366' });
                this.booksSell.push({ text: row['size'], cols: 1, rows: 1, color: '#ffb366' });
                this.booksSell.push({ text: row['side'], cols: 1, rows: 1, color: '#2eb82e' });
            }
        }
    };
    CoinInfoComponent.prototype.updateOpenOrder = function () {
        var _this = this;
        this.getOpenOrder().subscribe(function (books) {
            for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
                var book = books_1[_i];
                for (var _a = 0, _b = JSON.parse(book); _a < _b.length; _a++) {
                    var row = _b[_a];
                    _this.orderBookMap.set(row['symbol'], JSON.parse(book));
                    _this.bookSymbols.push(row['symbol']);
                    break;
                }
            }
            _this.selectedSymbol = _this.bookSymbols[0];
            _this.displayBook(_this.selectedSymbol);
            // two way binding using ngModel
            // console.log("selected symbol ", this.selectedSymbol);
        }, function (err) {
            console.log(err);
        });
        // setTimeout(this_.updateOpenOrderTOB.bind(this_), 1000);
    };
    CoinInfoComponent.prototype.requestBookSymbol = function (bookSymbol) {
        // this.queryService.symbolQuery.next(this.selectedSymbol);
        this.updateQuerySymbol.emit(this.selectedSymbol);
        this.displayBook(this.selectedSymbol);
        // this.ref.markForCheck();
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CoinInfoComponent.prototype, "updateQuerySymbol", void 0);
    CoinInfoComponent = __decorate([
        Component({
            selector: 'coin-info',
            templateUrl: './coin.info.component.html',
            styleUrls: ['./coin.info.component.css'],
            providers: [QueryService],
        }),
        __metadata("design:paramtypes", [HttpClient, QueryService])
    ], CoinInfoComponent);
    return CoinInfoComponent;
}());
export { CoinInfoComponent };
//# sourceMappingURL=coin.info.component.js.map