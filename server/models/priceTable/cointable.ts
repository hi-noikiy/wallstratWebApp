import {TimeSeries} from './coinTimeseries'

export class CoinTable {
  id: string;
  name: string;
  series: TimeSeries[] = [];

  constructor( id: string, name: string) {
     this.id = id;
     this.name = name;
  }
  insertNextSeries(row:TimeSeries){
    this.series.push(row);
  }
  
};
