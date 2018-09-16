import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {MatTableDataSource} from '@angular/material';
import {ExchangeCodes} from '../../models/marketType'

export interface PeriodicElement {
  symbol: string;
  name: string;
  price: string;
  bid:string;
  ask:string;
  change: string;
}


@Component({
    selector: 'currencies-list',
    templateUrl: './currencies.component.html',
  	styleUrls: ['./currencies.component.css'],
  	// providers: [
  	// 	{ provide: GdaxPublic, useFactory: exchangeFactory }
   //  ]
})



export class CurrenciesComponent implements OnInit{ 
	dataSource:any;
	displayedColumns: string[]

  httpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json');
	
  constructor(private http: HttpClient){
		
	}
	ngOnInit():void {
		this.getCoinTable().subscribe( cointable => { 
         	// console.log("allCoins ", cointable)
         	let ELEMENT_DATA: PeriodicElement[]=[];
         	for(let row of cointable){
            let datarow:PeriodicElement={} as any;
            datarow.price = parseFloat(row['price']).toFixed(4) 
            datarow.bid = parseFloat(row['bid_price']).toFixed(4) 
            datarow.ask = parseFloat(row['ask_price']).toFixed(4) 
            datarow.symbol = row['symbol']
            // console.log("change " ,  row['symbol'] , row['percentage_change']);
            datarow.change = parseFloat(row['percentage_change']).toFixed(4) 
            datarow.name = row['name'] 
            // console.log("row: ", datarow);
         	  ELEMENT_DATA.push(datarow);
         	}
         	this.displayedColumns = ['symbol', 'price', 'bid','ask', 'change','name' ];
  				this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        	}, 
        	err => { 
        		console.log(err);
        	}
	  	);
		
	}
  getCoinTable(data:any={}): Observable<any[]> {
    return this.http.get<any[]>('/api/coin-table')
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
	
}
