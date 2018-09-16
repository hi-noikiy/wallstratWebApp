
import { Component, ViewChild, AfterViewInit} from '@angular/core';

import { CoinGraphComponent } from './coin-graph/coin.graph.component'; 
 
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
  	styleUrls: ['./body.component.css'],
  	// encapsulation: ViewEncapsulation.None
})

export class BodyComponent implements AfterViewInit{ 

	/**
		when angular creates the child component, the reference to the child component is assigned to the child property
	*/
	
	@ViewChild(CoinGraphComponent) graphComponent: CoinGraphComponent;

	ngAfterViewInit() {

  }
  updateRequestSymbol(symbol:any){
    // console.log("value from event, " symbol);
    this.graphComponent.displayGraph(symbol);
  }
}