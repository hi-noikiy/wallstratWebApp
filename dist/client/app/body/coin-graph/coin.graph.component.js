var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { QueryService } from '../services/query.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
var CoinGraphComponent = /** @class */ (function () {
    function CoinGraphComponent(http, queryService) {
        this.http = http;
        this.queryService = queryService;
        this.lineChartData = [{ data: [] }];
        this.min_time = new Date();
        this.max_time = new Date();
        this.lineChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        type: 'time',
                        time: {
                            displayFormats: {
                                day: 'ddd, MMM Do',
                            },
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
                    label: function (tooltipItem, data) {
                        // alert(tooltipItem.xLabel)
                        return tooltipItem.yLabel;
                    },
                    beforeLabel: function (tooltipItem, data) {
                        return moment(tooltipItem.xLabel).format("ddd, MMMM Do");
                        // alert(tooltipItem)
                        // return "a@k";
                    },
                    title: function (tooltipItems, data) {
                        // alert(JSON.stringify(tooltipItems))
                        return "";
                    }
                }
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                radius: 1,
                // fill: false,
                borderColor: '#0066ff',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#99c2ff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            }
        ];
        this.lineChartType = 'line';
        this.historicalDataMap = new Map();
        this.graphSymbols = new Array();
        this.selectedTime = '6M';
    }
    CoinGraphComponent.prototype.ngOnChanges = function () {
        this.displayGraph(this.selectedSymbol);
    };
    CoinGraphComponent.prototype.ngAfterViewInit = function () {
        this.updateGraph({ interval: '6M', scale: '1D' });
    };
    CoinGraphComponent.prototype.updateGraph = function (params) {
        var _this = this;
        this.getHistoricalData(params).subscribe(function (rates) {
            _this.graphSymbols = [];
            _this.historicalDataMap.clear();
            for (var _i = 0, rates_1 = rates; _i < rates_1.length; _i++) {
                var rate = rates_1[_i];
                var dataPoints = [];
                var symbol = void 0;
                for (var _a = 0, _b = JSON.parse(rate).map(function (row, index) { return ({ row: row, index: index }); }); _a < _b.length; _a++) {
                    var _c = _b[_a], row = _c.row, index = _c.index;
                    if (index == 0)
                        symbol = row['symbol'];
                    var singleDatapoint = {};
                    singleDatapoint["x"] = new Date(row["time"] * 1000);
                    singleDatapoint["y"] = ((Number(row["low"]) + Number(row["high"])) / 2.0);
                    // console.log("date ",  moment(singleDatapoint["x"]).format("dddd, MMMM Do"))
                    dataPoints.push(singleDatapoint);
                }
                _this.graphSymbols.push(symbol);
                _this.historicalDataMap.set(symbol, dataPoints);
            }
            // this.min_time.setMonth(this.min_time.getMonth() - 6); 
            _this.displayGraph(_this.graphSymbols[0]);
        }, function (err) {
            console.log(err);
        });
    };
    CoinGraphComponent.prototype.displayGraph = function (symbol) {
        this.selectedSymbol = symbol;
        this.lineChartData = [{ data: this.historicalDataMap.get(symbol), label: symbol, lineTension: 0, steppedLine: true, }];
    };
    // events
    CoinGraphComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    CoinGraphComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    CoinGraphComponent.prototype.getHistoricalData = function (parameters) {
        if (parameters === void 0) { parameters = {}; }
        var queryParams = new HttpParams();
        // Begin assigning parameters
        queryParams = queryParams.append('interval', parameters.interval);
        queryParams = queryParams.append('scale', parameters.scale);
        // Make the API call using the new parameters.
        return this.http.get('/api/historical-data', { params: queryParams });
    };
    CoinGraphComponent.prototype.requestGraphTimeFrame = function (time_) {
        this.selectedTime = time_;
        var min_ = new Date();
        // alert(time_) 
        if (time_ = "6M") {
            this.updateGraph({ interval: '6M', scale: '1D' });
            // min_.setMonth(min_.getMonth() - 6); 
        }
        else if (time_ = "1W") {
            this.updateGraph({ interval: '7D', scale: '1H' });
            // min_.setDate(min_.getDate() - 7);
        }
        else if (time_ = "4H") {
            this.updateGraph({ interval: '4H', scale: '1m' });
            // min_.setDate(min_.getDate() - 1);
        }
        // this.min_time = min_;
        // this.chart.chart.config.options.scales.xAxes[0].time.min = min_;
        // this.chart.config.options = this.lineChartOptions;
        // this.chart.chart.update();
        // this.lineChartData = [{data: this.historicalDataMap.get(this.selectedSymbol), label: this.selectedSymbol, lineTension:0, steppedLine: true,}];
        // this.chart.chart.ngOnChanges({});
        this.displayGraph(this.selectedSymbol);
        this.chart.chart.update();
        // console.log(this.selectedTime);
    };
    __decorate([
        ViewChild(BaseChartDirective),
        __metadata("design:type", BaseChartDirective)
    ], CoinGraphComponent.prototype, "chart", void 0);
    CoinGraphComponent = __decorate([
        Component({
            selector: 'coin-graph',
            templateUrl: './coin.graph.component.html',
            styleUrls: ['./coin.graph.component.css'],
            providers: [QueryService],
        }),
        __metadata("design:paramtypes", [HttpClient, QueryService])
    ], CoinGraphComponent);
    return CoinGraphComponent;
}());
export { CoinGraphComponent };
//# sourceMappingURL=coin.graph.component.js.map