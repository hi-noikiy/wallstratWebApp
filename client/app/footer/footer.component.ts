
import { Component, OnInit} from '@angular/core';
 
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
  	styleUrls: ['./footer.component.css'],
  	// encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit{ 
	title = 'footer works!';
	/*
		ngOnInit lifecycle hook for you to step in and initialize the "notLoginHeader.component.html" component
	*/
	ngOnInit() {
    }
}