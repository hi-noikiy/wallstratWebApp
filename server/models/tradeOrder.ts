export class TradeMessage {
  time: any;
  price: any;
  size: any;
  side:any;
  bid:any;
  ask:any;

  constructor( time: any, price: any, size : any, bid:any, ask:any) {
     this.time = time;
     this.price = price;
     this.size = size; 
     this.bid = bid;
     this.ask = ask;
  }
   setSide(side:any){
  	this.side = side;
  }
};
