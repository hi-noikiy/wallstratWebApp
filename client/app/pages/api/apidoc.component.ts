
import { Component, AfterViewInit, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

 
@Component({
    selector: 'page-apidoc',
    templateUrl: './apidoc.component.html',
  	styleUrls: ['./apidoc.component.css'],
})

export class APIDocHeaderComponent implements AfterViewInit{ 

  constructor(private elementRef: ElementRef){

  }

  ngAfterViewInit() {
  	// this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#e6e6e6';
  }
}