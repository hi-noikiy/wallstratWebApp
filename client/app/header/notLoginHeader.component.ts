
import { Component, AfterViewInit, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {MatIconRegistry} from '@angular/material/icon';
 
@Component({
    selector: 'app-header',
    templateUrl: './notLoginHeader.component.html',
  	styleUrls: ['./notLoginHeader.component.css'],
  	// encapsulation: ViewEncapsulation.None
})

export class NotLoginHeaderComponent implements AfterViewInit{ 
	@ViewChild('exchangeSelect') exchangeDropDown;

	exchanges: string[] = [ 'Gdax', 'Binance', 'Coinone', 'Bitfinex', 'Bitstamp', 'Bitrex','Gemini',
		'Hitbtc','Kraken','Kucoin','Luno','Okcoin'
  	];
	constructor(private elementRef: ElementRef, public matIconRegistry: MatIconRegistry){
		matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
		
  	}
  	ngAfterViewInit() {
  		// this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#283649';
  	}
  	ngOnInit() { 
  		// this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#283649';
  	}
	openDropdown(e:any){
		 this.exchangeDropDown.open();
	}
	closeDropDown(e:any){
		this.exchangeDropDown.close();
	}

}