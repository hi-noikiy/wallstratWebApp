import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { QueryService } from '../services/query.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
    selector: 'coin-graph',
    templateUrl: './coin.graph.component.html',
  	styleUrls: ['./coin.graph.component.css'],
    providers: [QueryService],
})

export class CoinGraphComponent implements AfterViewInit{ 
	
  public lineChartData:Array<any> =[{ data: [] }];
  
  private min_time:Date=new Date();
  private max_time:Date=new Date();

  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
            day: 'ddd, MMM Do',
          },
          min: this.min_time,
          max: this.max_time
        }
      }],
      yAxes: [{
        stacked: true
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          // alert(tooltipItem.xLabel)
          return tooltipItem.yLabel;
        },
        beforeLabel: function(tooltipItem, data) {
          return moment(tooltipItem.xLabel).format("ddd, MMMM Do");
          // alert(tooltipItem)
          // return "a@k";
        },
        title: function(tooltipItems, data) {
          // alert(JSON.stringify(tooltipItems))
          return "";
        }
      }
    }
  };
  public lineChartColors:Array<any> = [
    	
    { 
      backgroundColor: 'rgba(148,159,177,0.2)',
      radius:1,
      // fill: false,
      borderColor: '#0066ff',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#99c2ff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      		
      // pointBackgroundColor: 'transparent',
      // pointBorderColor: 'transparent',
    }
  ];
  public  lineChartType:string = 'line';
  private historicalDataMap:Map<string, any> = new Map<string, any>();
  private graphSymbols:string[]= new Array(); 
  private selectedTime:string;

  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

	constructor(private http: HttpClient, private queryService: QueryService){
		
	}
	ngAfterViewInit():void {

		this.getHistoricalData().subscribe( rates => {
        for(let rate of rates){
          let dataPoints: Array<any>=[];
          let symbol:string;
          for(const {row, index} of JSON.parse(rate).map((row, index) => ({ row, index }))){
            if(index==0) symbol = row['symbol']
            let singleDatapoint = {};
            singleDatapoint["x"] = new Date(row["time"]*1000);singleDatapoint["y"]=((Number(row["low"]) + Number(row["high"]))/2.0);
            // console.log("date ",  moment(singleDatapoint["x"]).format("dddd, MMMM Do"))
            dataPoints.push(singleDatapoint);
          }
          this.graphSymbols.push(symbol)
          this.historicalDataMap.set(symbol, dataPoints);
        }
        this.selectedTime="3M";
        this.min_time.setMonth(this.min_time.getMonth() - 3); 
        this.displayGraph("BTC-USD");
        }, 
        err => { 
        	console.log(err);
        });
	}
  
  displayGraph(symbol:string){
    this.lineChartData = [{data: this.historicalDataMap.get(symbol), label: symbol, lineTension:0, steppedLine: true,}];
  }
	// events
  public chartClicked(e:any):void {
    // console.log(e);
  }
 
  public chartHovered(e:any):void {
    // console.log(e);
  }
  getHistoricalData(data:any={}): Observable<any[]> {
    return this.http.get<any[]>('/api/historical-data');
  }
  requestGraphTimeFrame(time_:string){
    this.selectedTime=time_;
    let min_:Date = new Date();
     
    if(time_="3M"){
      min_.setMonth(min_.getMonth() - 3); 
    }
    else if(time_="1M"){
      min_.setMonth(min_.getMonth() - 1);
    }
    else if(time_="1W"){
       min_.setDate(min_.getDate() - 7);
    }
    else if(time_="1D"){
      min_.setDate(min_.getDate() - 1);
    }
    this.min_time = min_;
    this.chart.chart.config.options = this.lineChartOptions;
    this.chart.chart.update();
  }

}
