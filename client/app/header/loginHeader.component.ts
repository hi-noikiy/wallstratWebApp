
/*
The app component is the root component of the application, it defines the root tag of the app as <app></app> with the selector property.
*/

import { Component} from '@angular/core';
 
@Component({
    selector: 'app-login-header',
    templateUrl: './loginHeader.component.html',
  	styleUrls: ['./loginHeader.component.css'],
  	// encapsulation: ViewEncapsulation.None
})
 
export class LoginHeaderComponent { }