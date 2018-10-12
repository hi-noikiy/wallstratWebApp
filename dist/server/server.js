"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var Promise = require('es6-promise').Promise;
var request = require('request');
var wallstrat_1 = require("wallstrat");
var clientApiPath = 'http://localhost:2929';
var app = express();
exports.app = app;
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));
app.set('host', "0.0.0.0");
app.use('/', express.static(path.join(__dirname, '../client')));
// console.log("current dir ", __dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
// let feed = new MarketPublicFeed();
function request_(options) {
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                // setTimeout(reject, 1000, error);
                reject(error);
            }
            else {
                // setTimeout(resolve, 50, body);
                resolve(body);
            }
        });
    });
}
/////////////////////////////////////////////////////////////////////////////////
var gdaxCoins;
request_(clientApiPath + '/v1/coins/gdax/').then(function (coins) {
    // console.log("coins bro ", JSON.parse(coins));
    gdaxCoins = new Map(JSON.parse(coins).map(function (e) { return [e.code, e.name]; }));
    // console.log("coins bro ", gdaxCoins);
});
var bitfinexCoins;
request_(clientApiPath + '/v1/coins/bitfinex/').then(function (coins) {
    bitfinexCoins = new Map(JSON.parse(coins).map(function (e) { return [e.code, e.name]; }));
});
var productsList = new Map();
var gdaxProducts;
request_(clientApiPath + '/v1/products/gdax/').then(function (products) {
    productsList[wallstrat_1.ExchangeCodes.GDAX] = JSON.parse(products);
    gdaxProducts = JSON.parse(products).reduce(function (map, e) {
        for (var _i = 0, _a = e.symbols; _i < _a.length; _i++) {
            var pr = _a[_i];
            map[pr] = e.base_currency;
        }
        return map;
    }, {});
    // console.log("gdax products ", gdaxProducts);
});
var bitfinexProducts;
request_(clientApiPath + '/v1/products/bitfinex/').then(function (products) {
    productsList[wallstrat_1.ExchangeCodes.BITFINEX] = JSON.parse(products);
    bitfinexProducts = JSON.parse(products).reduce(function (map, e) {
        for (var _i = 0, _a = e.symbols; _i < _a.length; _i++) {
            var pr = _a[_i];
            map[pr] = e.base_currency;
        }
        return map;
    }, {});
    // console.log("bitfinex products ", bitfinexProducts)
});
var exchangeCodes = ['gdax', 'bitstamp', 'gemini', 'hitbtc', 'huobi', 'kraken', 'kucoin',
    'luno', 'binance', 'okcoin', 'bitfinex', 'bitrex', 'coinone'];
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
// console.log("path", path.join(__dirname, '../client/index.html'));
app.listen(app.get('port'), app.get('host'), function () {
    console.log('Wallstrat listening on port ' + app.get('port'));
});
app.get('/api/open-order', function (req, res) {
    var resultPromises = [];
    for (var _i = 0, _a = productsList[wallstrat_1.ExchangeCodes.GDAX]; _i < _a.length; _i++) {
        var pr = _a[_i];
        for (var _b = 0, _c = pr.symbols; _b < _c.length; _b++) {
            var symbol = _c[_b];
            var opt_book = clientApiPath + '/v1/orderbook/gdax/' + symbol;
            var bookPromise = request_(opt_book).then(function (book) {
                return book;
            }).catch(function (err) {
            });
            resultPromises.push(bookPromise);
        }
    }
    Promise.all(resultPromises).then(function (books) {
        // console.log("books ", books);
        res.send(books);
    }).catch(function (err) {
    });
});
app.post('/api/last-trade', function (req, res) {
    // data.fetchLastTrade(ExchangeCodes.GDAX, 'BTC-USD').then(function(lastTrade){
    // 	// console.log("Last trade:" + JSON.stringify(lastTrade));
    // 	res.send(lastTrade)
    // });
});
app.get('/api/coin-table', function (req, res) {
    var resultPromises = [];
    for (var _i = 0, _a = productsList[wallstrat_1.ExchangeCodes.GDAX]; _i < _a.length; _i++) {
        var pr = _a[_i];
        var _loop_1 = function (symbol) {
            var row = {};
            var opt_ticker = clientApiPath + '/v1/ticker/gdax/' + symbol;
            var tickerchangePromise = request_(opt_ticker).then(function (ticker) {
                ticker = JSON.parse(ticker);
                // console.log(" gdax ticker ", ticker)
                row['symbol'] = ticker.symbol;
                row['price'] = ticker.last_trade_price;
                row['bid_price'] = ticker.bid_price;
                row['ask_price'] = ticker.ask_price;
                row['base_currency'] = gdaxProducts[symbol];
                row['name'] = gdaxCoins.get(gdaxProducts[symbol]);
                var opt_pricechange = clientApiPath + '/v1/pricechange/gdax/' + symbol;
                return request_(opt_pricechange).then(function (change) {
                    change = JSON.parse(change);
                    // console.log('gdax change ', change.change_percentage)
                    row['percentage_change'] = change.change_percentage;
                });
            }).then(function (change) {
                return row;
            }).catch(function (err) {
            });
            resultPromises.push(tickerchangePromise);
        };
        for (var _b = 0, _c = pr.symbols; _b < _c.length; _b++) {
            var symbol = _c[_b];
            _loop_1(symbol);
        }
    }
    for (var _d = 0, _e = productsList[wallstrat_1.ExchangeCodes.BITFINEX]; _d < _e.length; _d++) {
        var pr = _e[_d];
        var _loop_2 = function (symbol) {
            var row = {};
            var opt_ticker = clientApiPath + '/v1/ticker/bitfinex/' + symbol;
            var tickerchangePromise = request_(opt_ticker).then(function (ticker) {
                ticker = JSON.parse(ticker);
                row['symbol'] = symbol.toUpperCase();
                row['price'] = ticker.last_trade_price;
                row['bid_price'] = ticker.bid_price;
                row['ask_price'] = ticker.ask_price;
                row['base_currency'] = bitfinexProducts[symbol];
                row['name'] = bitfinexCoins.get(bitfinexProducts[symbol]).toUpperCase();
                row['percentage_change'] = ticker.daily_change_percentage;
                return row;
            }).catch(function (err) {
            });
            resultPromises.push(tickerchangePromise);
        };
        for (var _f = 0, _g = pr.symbols; _f < _g.length; _f++) {
            var symbol = _g[_f];
            _loop_2(symbol);
        }
    }
    Promise.all(resultPromises).then(function (table) {
        // res.send(table);
        res.send(table.filter(function (v) { return v.price; })); // only if price of row is defined  	
    }).catch(function (err) {
    });
});
app.get('/api/historical-data', function (req, res) {
    var resultPromises = [];
    for (var _i = 0, _a = productsList[wallstrat_1.ExchangeCodes.GDAX]; _i < _a.length; _i++) {
        var pr = _a[_i];
        for (var _b = 0, _c = pr.symbols; _b < _c.length; _b++) {
            var symbol = _c[_b];
            var opt_ohlc = clientApiPath + '/v1/ohlc/gdax/' + symbol;
            var request_option = {
                method: 'GET',
                uri: opt_ohlc,
                qs: req.query
            };
            var ratesPromise = request_(request_option).then(function (rate) {
                return rate;
            }).catch(function (err) {
            });
            resultPromises.push(ratesPromise);
        }
    }
    Promise.all(resultPromises).then(function (rates) {
        res.send(rates);
    }).catch(function (err) {
    });
});
app.get('/api/traded-pairs', function (req, res) {
    var resultPromises = [];
    var _loop_3 = function (xchCode) {
        var row = {};
        var tradedPairsPromise = request_(clientApiPath + '/v1/products/' + xchCode).then(function (products) {
            // let code : ExchangeCodes = ExchangeCodes[<string>(xchCode).toUpperCase()];
            // tradedPairsList.set(xchCode, JSON.parse(products));
            row['code'] = xchCode;
            row['pairs'] = JSON.parse(products);
            // tradedPairsList.push(row)
            return row;
        }).catch(function (err) {
            // console.log(err);
            // proimse all get resolved even if one promise fails - just catch it here 
        });
        resultPromises.push(tradedPairsPromise);
    };
    // let tradedPairsList:Map<String, Array<String>>=new Map<String, Array<String>>();
    // let tradedPairsList=[];
    for (var _i = 0, exchangeCodes_1 = exchangeCodes; _i < exchangeCodes_1.length; _i++) {
        var xchCode = exchangeCodes_1[_i];
        _loop_3(xchCode);
    }
    Promise.all(resultPromises).then(function (productsPairs) {
        res.send(productsPairs);
    }).catch(function (err) {
    });
});
//# sourceMappingURL=server.js.map