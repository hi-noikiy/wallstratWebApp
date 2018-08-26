import {HistoricalRates} from '../historicalData';

export class TimeSeries {
  
  currencyPair: string;
  rates:HistoricalRates[]=[];

  constructor( pair: string) {
     this.currencyPair = pair;
  }
  insertNextHistoricalRate(row:HistoricalRates){
    this.rates.push(row);
  }
};
