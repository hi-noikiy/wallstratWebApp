export class HistoricalRates {
  time: any;
  low: any;
  high: any;
  open:any;
  close:any;
  volume:any;

  constructor( time:any, low:any, high:any, open:any, close:any, volume:any) {
     this.time = time;
     this.low = low;
     this.high = high; 
     this.open = open;
     this.close = close;
     this.volume = volume;
  }
};
