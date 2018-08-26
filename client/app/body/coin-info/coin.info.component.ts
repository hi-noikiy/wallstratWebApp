import { Component, OnInit} from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { QueryService } from '../services/query.service';

@Component({
    selector: 'coin-info',
    templateUrl: './coin.info.component.html',
  	styleUrls: ['./coin.info.component.css'],
    providers: [QueryService],
  	// providers: [
  	// 	{ provide: GdaxPublic, useFactory: exchangeFactory }
   //  ]
})



export class CoinInfoComponent implements OnInit{ 

  @Output() updateQuerySymbol = new EventEmitter<String>();
	
  private buyBookHeader = [
    	{text: 'Price', cols: 1, rows: 1, color: '#e6e6e6'},
    	{text: 'Size', cols: 1, rows: 1, color: '#e6e6e6'},
    	{text: 'Side', cols: 1, rows: 1, color: '#e6e6e6'},
  ];
  private sellBookHeader = [
      {text: 'Price', cols: 1, rows: 1, color: '#e6e6e6'},
      {text: 'Size', cols: 1, rows: 1, color: '#e6e6e6'},
      {text: 'Side', cols: 1, rows: 1, color: '#e6e6e6'},
  ];
  private booksBuy = []; 
  private booksSell = [];
  private orderBookMap:Map<string, any> = new Map<string, any>();
  private bookSymbols:string[]= new Array();
  private selectedSymbol:string;

  constructor(private http: HttpClient, private queryService: QueryService){
    this.updateOpenOrder();
   		
  }
	ngOnInit():void {
		
		
	}
	getOpenOrder(data:any={}): Observable<any[]> {
		// let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any[]>('/api/open-order');
  }
  displayBook(symbol:string){
    this.booksBuy=[]
    this.booksSell=[]
    for(let row of this.orderBookMap.get(symbol) ){

      if(row['side']=='B'){
        this.booksBuy.push({text:row['price'], cols: 1, rows: 1, color: '#ffb366'});
        this.booksBuy.push({text:row['size'], cols: 1, rows: 1, color: '#ffb366'});
        this.booksBuy.push({text:row['side'], cols: 1, rows: 1, color: '#2eb82e'});
      }
      else{
        this.booksSell.push({text:row['price'], cols: 1, rows: 1, color: '#ffb366'});
        this.booksSell.push({text:row['size'], cols: 1, rows: 1, color: '#ffb366'});
        this.booksSell.push({text:row['side'], cols: 1, rows: 1, color: '#2eb82e'});
      } 
    }
  }
  updateOpenOrder(){
  	this.getOpenOrder().subscribe(books => {
    for(let book of books){
      for(let row of JSON.parse(book)){
          this.orderBookMap.set(row['symbol'], JSON.parse(book));
          this.bookSymbols.push(row['symbol'])
         break;
         
      }
    }
    this.selectedSymbol="BTC-USD";
    this.displayBook("BTC-USD");
    // two way binding using ngModel
    // console.log("selected symbol ", this.selectedSymbol);
    

        }, 
        err => { 
          console.log(err);
        }
	  );
  	   // setTimeout(this_.updateOpenOrderTOB.bind(this_), 1000);
  }
  requestBookSymbol(bookSymbol){
    // this.queryService.symbolQuery.next(this.selectedSymbol);
    this.updateQuerySymbol.emit(this.selectedSymbol)
    this.displayBook(this.selectedSymbol);
    // this.ref.markForCheck();
  }
	
}
