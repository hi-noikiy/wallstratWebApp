
import { Component, AfterViewInit} from '@angular/core';
 
@Component({
    selector: 'apidoc-rest',
    templateUrl: './restapidoc.component.html',
  	styleUrls: ['./restapidoc.component.css'],
})

export class RestAPIDocComponent implements AfterViewInit{ 
  APIS: Array<any>=[];
  panelOpenState = true;
  constructor(){
  	this.panelOpenState = true;
  	this.APIS = [
  		{
  			title:'Products',
  			description:'Get all the token pairs traded on the exchange',
  			rest:'http://wallstrat.com/api/products/:exchangecode/'
  		},
  		{
  			title:'Order Book',
  			description:'Get buy and sell side quotes - top of the book and depth of the book',
  			rest:'http://wallstrat.com/api/orderbook/:exchangecode/:symbol'
  		},
  		{
  			title:'Trades',
  			description:'Get recent trades executed on the exchange',
  			rest:'http://wallstrat.com/api/trade/:exchangecode/:symbol'
  		},
  		{
  			title:'Best Bid, Best Ask',
  			description:'Get best buy and sell price of a traded instrument',
  			rest:'http://wallstrat.com/api/bb/:exchangecode/:symbol'
  		},
  		{
  			title:'Ticker',
  			description:'Get ticker for traded pair',
  			rest:'http://wallstrat.com/api/ticker/:exchangecode/:symbol'
  		}

  	];
  }
  ngAfterViewInit() {
  	this.panelOpenState = true;
  }
}