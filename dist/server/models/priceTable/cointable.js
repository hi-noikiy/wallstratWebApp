"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoinTable = /** @class */ (function () {
    function CoinTable(id, name) {
        this.series = [];
        this.id = id;
        this.name = name;
    }
    CoinTable.prototype.insertNextSeries = function (row) {
        this.series.push(row);
    };
    return CoinTable;
}());
exports.CoinTable = CoinTable;
;
//# sourceMappingURL=cointable.js.map