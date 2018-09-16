
import { Component, OnInit} from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'product-list',
    templateUrl: './product.component.html',
  	styleUrls: ['./product.component.css'],
})

export class ProductComponent { 
	products: Product[];
	product : Product;
	product_itr: number;
	constructor(){
		this.products = [
		   new Product('Crypto Market Data Solutions', 'Single API to consume market data', '',
		   	[
		   		'Get normalized data', 'All major exchange connectivity ','Historical market data',
		   		'Rest, Websocket Feed API ...' 
		   	]),
		   // new Product('Trading toolkit', 'Private account API, providing trading features', '',
		   // 	[	
		   // 		'Authentication API', 'Trading API - fill, deposit, withdraw etc.'
		   // 	]
		   // 	),
		   new Product('Analytics Tools', 'High Performance Analytics', '',
		   	[
		   		'Time series analysis', 'Trading Signals', 'price comparisons'
		   	]
		   	),
		]
		// this.product_itr = 0;
		// this.product = this.products[this.product_itr];
		// setInterval(this.changeProduct.bind(this), 4000);
	}
    changeProduct():void{
    	this.product = this.products[this.product_itr++];
    	if(this.products.length<= this.product_itr) this.product_itr = 0;
    	//this.product_itr++;
    }
}