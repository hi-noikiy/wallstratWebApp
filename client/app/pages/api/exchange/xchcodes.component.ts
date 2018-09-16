
import { Component, AfterViewInit} from '@angular/core';
 
@Component({
    selector: 'apidoc-exchange',
    templateUrl: './xchcodes.component.html',
  	styleUrls: ['./xchcodes.component.css'],
})

export class ExchangeAPIDocComponent implements AfterViewInit{ 

  exchangeCodes: string[];
  ngAfterViewInit() {
  	
  }
  constructor(){
  	this.exchangeCodes = ['gdax', 'binance', 'coinone', 'bitfinex', 'bitstamp', 'bitrex', 'gemini', 'hitbtc',
  		'kraken', 'kucoin', 'luno', 'okcoin'
  	];
  }
}