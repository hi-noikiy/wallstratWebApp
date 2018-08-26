
/*
The app component is the root component of the application, it defines the root tag of the app as <app></app> with the selector property.
*/

import { Component, ViewEncapsulation} from '@angular/core';
 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
  	// encapsulation: ViewEncapsulation.None
})
 
export class AppComponent { }