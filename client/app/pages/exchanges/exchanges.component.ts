import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
export interface ProductsPairs {
  symbols: string;
  exchangeCode: string;
  baseCurrency: string;
}

@Component({
    selector: 'page-exchanges',
    templateUrl: './exchanges.component.html',
  	styleUrls: ['./exchanges.component.css'],
  	// encapsulation: ViewEncapsulation.None
})

export class ExchangesHeaderComponent implements AfterViewInit{ 
	grid: Array<ProductsPairs> = [];
	constructor(private http: HttpClient){
   		
  	}
  	ngAfterViewInit() {
  		this.grid = [];
  		this.getProductPairs().subscribe(markets =>{ 
  			this.grid = markets;
  			console.log(markets); 
  			for(let market of markets){
  				let xchCode = market['code'];
  				for(let pair of market){

  				}
  			}
  		// 	Object.keys(pairs).forEach(function(key) {
  		// 		// let tile = ProductsPairsGrid = {text: key, cols: 2, rows: 1, color: 'lightblue'};
  		// 		// tradedpairs.push(tile);
				// for(let pair of pairs[key]){
				// 	this.grid.push({symbols:pair['pairs'].join(), exchangeCode:key, baseCurrency:pair['base_currency']});
				// 	// let quoteSymbol = pair['base_currency'];
				// 	// let pairsForthisQuoteSymbol = pair['symbols']; 
				// }  				
  				   
    //   		}.bind(this));
  		},
  		err =>{
  			console.log(err)
  		});
  	}
  	getProductPairs(data:any={}): Observable<any[]> {
    	return this.http.get<any[]>('/api/traded-pairs');
  	}
  
}