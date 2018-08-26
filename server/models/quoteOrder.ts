export class QuoteMessage {
  price: any;
  size: any;
  num_orders: any;
  side:any;
  symbol:string;

  constructor( price: any, size: any, num_orders : any) {
     this.price = price;
     this.size = size;
     this.num_orders = num_orders; 
  }
  setSide(side:any){
  	this.side = side;
  }
  setSymbol(symbol:string){
    this.symbol = symbol;
  }
};
