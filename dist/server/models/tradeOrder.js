"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TradeMessage = /** @class */ (function () {
    function TradeMessage(time, price, size, bid, ask) {
        this.time = time;
        this.price = price;
        this.size = size;
        this.bid = bid;
        this.ask = ask;
    }
    TradeMessage.prototype.setSide = function (side) {
        this.side = side;
    };
    return TradeMessage;
}());
exports.TradeMessage = TradeMessage;
;
//# sourceMappingURL=tradeOrder.js.map