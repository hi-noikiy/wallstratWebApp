import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';

import { MarketPublicFeed, ExchangeCodes} from 'wallstrat'



const app = express();
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
// console.log("current dir ", __dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));





let feed = new MarketPublicFeed();




const gdaxCoins = new Map(JSON.parse(feed.getPrimeTokens(ExchangeCodes.GDAX)).map(e => [e.code, e.name]));
const bitfinexCoins = new Map(JSON.parse(feed.getPrimeTokens(ExchangeCodes.BITFINEX)).map(e => [e.code, e.name]));
// console.log("GDAX Coins ", gdaxCoins);
// console.log("BITFINEX Coins ", bitfinexCoins);
// console.log(JSON.parse(feed.getTokens(ExchangeCodes.GDAX)));

const gdaxProducts = JSON.parse(feed.getPrimeProductsPairs(ExchangeCodes.GDAX)).reduce(function(map, e) {
    for(let pr of e.symbols){
    	map[pr] = e.base_currency;
    }
    return map;
}, {});
const bitfinexProducts = JSON.parse(feed.getPrimeProductsPairs(ExchangeCodes.BITFINEX)).reduce(function(map, e) {
    for(let pr of e.symbols){
    	map[pr] = e.base_currency;
    }
    return map;
}, {});


// mongoose.connect(process.env.MONGODB_URI);
// const db = mongoose.connection;
// (<any>mongoose).Promise = global.Promise;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');

//   setRoutes(app);

//   app.listen(app.get('port'), () => {
//     console.log('Mean Stack listening on port ' + app.get('port'));
//   });

// });



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), () => {
	console.log('Wallstrat listening on port ' + app.get('port'));
});

app.get('/api/open-order', function (req, res) {

	let resultPromises = [];
	for(let pr of JSON.parse(feed.getPrimeProductsPairs(ExchangeCodes.GDAX)) ){
		for(let symbol of pr.symbols){
			
			let bookPromise = feed.getOrderBook(ExchangeCodes.GDAX, {productID:symbol, level:2}).then(book =>{
				return book;
			}).catch(err=>{

			});
			resultPromises.push(bookPromise)
		}
	}
	Promise.all(resultPromises).then(function(books){ // books = array of book
		// console.log("books ", books);
		return res.send(books);		
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
    

	let startTime:Date = new Date(), endTime:Date = new Date();
	endTime.setHours(endTime.getHours() - 1); 
	startTime.setDate(startTime.getDate() - 1)

	let resultPromises = [];
	for(let pr of JSON.parse(feed.getPrimeProductsPairs(ExchangeCodes.GDAX)) ){

		for(let symbol of pr.symbols){
			let row = {};
			let tickerchangePromise = feed.getTicker(ExchangeCodes.GDAX, {productID:symbol}).then(function(ticker){
				
				ticker = JSON.parse(ticker)
				row['symbol'] = ticker.symbol;
				row['price'] =  ticker.last_trade_price;
				row['bid_price'] =  ticker.bid_price;
				row['ask_price'] =  ticker.ask_price;
				row['base_currency'] =  gdaxProducts[symbol];
				row['name'] = gdaxCoins.get(gdaxProducts[symbol]);

				return feed.getChange(ExchangeCodes.GDAX, {productID:symbol, startTime: startTime.toISOString(), endTime: endTime.toISOString(),timeScale:21600}).then( change =>{
					change = JSON.parse(change)
					row['percentage_change'] =  change.change_percentage;
					
				});
			}).then(function(change){
				return row;
			}).catch(err=>{

			});
			resultPromises.push(tickerchangePromise)
		}

	}
	for(let pr of JSON.parse(feed.getPrimeProductsPairs(ExchangeCodes.BITFINEX)) ){

		for(let symbol of pr.symbols){
			let row = {};
			let tickerchangePromise = feed.getTicker(ExchangeCodes.BITFINEX, {productID:"t".concat(symbol.toUpperCase())}).then(function(ticker){
				
				ticker = JSON.parse(ticker)
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
		return res.send(table);		
	}).catch(err=>{

	});
	
	
});


app.get('/api/historical-data', function (req, res) {


	let startTime:Date = new Date(), endTime:Date = new Date();
	// startTime.setDate(startTime.getDate() - 7) // last seven days of data
	startTime.setMonth(startTime.getMonth() - 3); // last one month  

	let resultPromises = [];
	for(let pr of JSON.parse(feed.getPrimeProductsPairs(ExchangeCodes.GDAX)) ){
		for(let symbol of pr.symbols){

			let ratesPromise = feed.getHistoricRates(ExchangeCodes.GDAX, {productID:symbol, startTime: startTime.toISOString(), endTime: endTime.toISOString(),timeScale:86400}).then(rate =>{
				return rate;
			}).catch(err=>{

			});
			resultPromises.push(ratesPromise)
		}
	}
	Promise.all(resultPromises).then(function(rates){ // rates = array of rate
		return res.send(rates);		
	}).catch(err=>{

	});
});



export { app };
