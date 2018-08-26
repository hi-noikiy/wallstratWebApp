import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from "rxjs";

import "rxjs/Rx";
import { Subject } from "rxjs/Subject";
export class QueryService {
	// public symbolQuery : Subject<string> = new Subject<string>();
	public symbolQuery : BehaviorSubject<string> = new BehaviorSubject<string>('BTC-USD');

	// getQuerService():Observable<any>{
 //    	return this.symbolQuery.asObservable();
 //  	}
}