"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuoteMessage = /** @class */ (function () {
    function QuoteMessage(price, size, num_orders) {
        this.price = price;
        this.size = size;
        this.num_orders = num_orders;
    }
    QuoteMessage.prototype.setSide = function (side) {
        this.side = side;
    };
    QuoteMessage.prototype.setSymbol = function (symbol) {
        this.symbol = symbol;
    };
    return QuoteMessage;
}());
exports.QuoteMessage = QuoteMessage;
;
//# sourceMappingURL=quoteOrder.js.map