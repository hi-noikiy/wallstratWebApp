"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Currency = /** @class */ (function () {
    function Currency(id, name, size) {
        this.id = id;
        this.name = name;
        this.minSize = size;
    }
    Currency.prototype.changeName = function (name) {
        this.name = name;
    };
    return Currency;
}());
exports.Currency = Currency;
;
//# sourceMappingURL=currenciesList.js.map