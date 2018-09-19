"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeSeries = /** @class */ (function () {
    function TimeSeries(pair) {
        this.rates = [];
        this.currencyPair = pair;
    }
    TimeSeries.prototype.insertNextHistoricalRate = function (row) {
        this.rates.push(row);
    };
    return TimeSeries;
}());
exports.TimeSeries = TimeSeries;
;
//# sourceMappingURL=coinTimeseries.js.map