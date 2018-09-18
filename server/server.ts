import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';

var Promise = require('es6-promise').Promise;

const request = require('request');


import {ExchangeCodes} from 'wallstrat';


const app = express();
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 80));
// app.set('host', "0.0.0.0");

app.use('/', express.static(path.join(__dirname, '../client')));
// console.log("current dir ", __dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));


// let feed = new MarketPublicFeed();

function request_(options){

    return new Promise(function(resolve, reject){
      request(options, function(error, response, body){
        if(error){
          // setTimeout(reject, 1000, error);
          reject(error);
       }
       else{
          // setTimeout(resolve, 50, body);
          resolve(body);
       }
      });
    });
}


/////////////////////////////////////////////////////////////////////////////////


let gdaxCoins:any;
request_('http://localhost:2929/api/coins/gdax/').then(coins=>{
	// console.log("coins bro ", JSON.parse(coins));
	gdaxCoins = new Map(JSON.parse(coins).map(e => [e.code, e.name]));
	// console.log("coins bro ", gdaxCoins);
});


let bitfinexCoins:any;
request_('http://localhost:2929/api/coins/bitfinex/').then(coins=>{
	bitfinexCoins = new Map(JSON.parse(coins).map(e => [e.code, e.name]));
});


let productsList:Map<ExchangeCodes, Array<string>>=new Map<ExchangeCodes, Array<string>>();

let gdaxProducts:any;
request_('http://localhost:2929/api/products/gdax/').then(products=>{
	productsList[ExchangeCodes.GDAX] = JSON.parse(products);
    gdaxProducts = JSON.parse(products).reduce(function(map, e) {
    		for(let pr of e.symbols){
    			map[pr] = e.base_currency;
    		}
    		return map;
		}, {});
    // console.log("gdax products ", gdaxProducts);
});


let bitfinexProducts:any;
request_('http://localhost:2929/api/products/bitfinex/').then(products=>{
	productsList[ExchangeCodes.BITFINEX] = JSON.parse(products);
    bitfinexProducts = JSON.parse(products).reduce(function(map, e) {
    	for(let pr of e.symbols){
    		map[pr] = e.base_currency;
    	}
    	return map;
	}, {});
	// console.log("bitfinex products ", bitfinexProducts)
});


let exchangeCodes: Array<String>= ['gdax', 'bitstamp', 'gemini', 'hitbtc', 'huobi', 'kraken', 'kucoin',
	'luno', 'binance', 'okcoin', 'bitfinex', 'bitrex', 'coinone'];


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// console.log("path", path.join(__dirname, '../client/index.html'));

app.listen(app.get('port'),'0.0.0.0', () => {
	console.log('Wallstrat listening on port ' + app.get('port'));
});

app.get('/api/open-order', function (req, res) {

	let resultPromises = [];
	for(let pr of productsList[ExchangeCodes.GDAX]){
		for(let symbol of pr.symbols){
			let opt_book = 'http://localhost:2929/api/orderbook/gdax/'+ symbol;
			let bookPromise = request_(opt_book).then(book =>{
				return book;
			}).catch(err=>{

			});
			resultPromises.push(bookPromise)
		}
	}
	Promise.all(resultPromises).then(function(books){ // books = array of book
		// console.log("books ", books);
		res.send(books);		
	}).catch(err=>{

	});
});

app.post('/api/last-trade', function (req, res) {
	// data.fetchLastTrade(ExchangeCodes.GDAX, 'BTC-USD').then(function(lastTrade){
	// 	// console.log("Last trade:" + JSON.stringify(lastTrade));
	// 	res.send(lastTrade)
	// });
});

app.get('/api/coin-table', function (req, res) {
    
	let resultPromises = [];

	for(let pr of productsList[ExchangeCodes.GDAX] ){

		for(let symbol of pr.symbols){
			let row = {};
			let opt_ticker = 'http://localhost:2929/api/ticker/gdax/'+ symbol;			
			let tickerchangePromise =request_(opt_ticker).then(function(ticker){
				ticker = JSON.parse(ticker);
				// console.log(" gdax ticker ", ticker)
				row['symbol'] = ticker.symbol;
				row['price'] =  ticker.last_trade_price;
				row['bid_price'] =  ticker.bid_price;
				row['ask_price'] =  ticker.ask_price;
				row['base_currency'] =  gdaxProducts[symbol];
				row['name'] = gdaxCoins.get(gdaxProducts[symbol]);

				let opt_pricechange = 'http://localhost:2929/api/pricechange/gdax/'+ symbol;	

				return request_(opt_pricechange).then( change =>{
					change = JSON.parse(change);
					// console.log('gdax change ', change.change_percentage)
					row['percentage_change'] =  change.change_percentage;
					
				});
			}).then(function(change){
				return row;
			}).catch(err=>{

			});
			resultPromises.push(tickerchangePromise)
		}

	}
	for(let pr of productsList[ExchangeCodes.BITFINEX] ){

		for(let symbol of pr.symbols){
			let row = {};
			let opt_ticker = 'http://localhost:2929/api/ticker/bitfinex/'+ symbol;		
			let tickerchangePromise = request_(opt_ticker).then(function(ticker){
				ticker = JSON.parse(ticker);
				row['symbol'] = symbol.toUpperCase();
				row['price'] =  ticker.last_trade_price;
				row['bid_price'] =  ticker.bid_price;
				row['ask_price'] =  ticker.ask_price;
				row['base_currency'] =  bitfinexProducts[symbol];
				row['name'] = (<string>bitfinexCoins.get(bitfinexProducts[symbol])).toUpperCase();
				row['percentage_change'] =  ticker.daily_change_percentage;
				return row;
			}).catch(err=>{

			});
			resultPromises.push(tickerchangePromise)
		}
	}
	Promise.all(resultPromises).then(function(table){ // table = array of row
		// res.send(table);
		res.send(table.filter(v => v.price)); // only if price of row is defined  	
	}).catch(err=>{

	});	
	
});



app.get('/api/historical-data', function (req, res) {

	let resultPromises = [];
	for(let pr of productsList[ExchangeCodes.GDAX] ){
		for(let symbol of pr.symbols){
			let opt_ohlc = 'http://localhost:2929/api/ohlc/gdax/'+ symbol;
			let request_option = {
				method:'GET',
				uri:opt_ohlc,
				qs:req.query

			};	
			let ratesPromise = request_(request_option).then(rate =>{
				return rate;
			}).catch(err=>{

			});
			resultPromises.push(ratesPromise)
		}
	}
	Promise.all(resultPromises).then(function(rates){ // rates = array of rate
		res.send(rates);		
	}).catch(err=>{

	});
});



app.get('/api/traded-pairs', function (req, res) {
	let resultPromises = [];
	// let tradedPairsList:Map<String, Array<String>>=new Map<String, Array<String>>();
	// let tradedPairsList=[];
	for(let xchCode of exchangeCodes){
		let row = {};
		let tradedPairsPromise=request_('http://localhost:2929/api/products/'+xchCode).then(products=>{
			// let code : ExchangeCodes = ExchangeCodes[<string>(xchCode).toUpperCase()];
			// tradedPairsList.set(xchCode, JSON.parse(products));
			row['code'] = xchCode;
			row['pairs'] = JSON.parse(products);
			// tradedPairsList.push(row)
			return row;
		}).catch(err =>{
			// console.log(err);
			// proimse all get resolved even if one promise fails - just catch it here 
		});
		resultPromises.push(tradedPairsPromise);
	}
	Promise.all(resultPromises).then(function(productsPairs){ // productsPairs = array of row
		res.send(productsPairs);		
	}).catch(err=>{

	});
	
});

export { app };
