import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation : ViewEncapsulation.None
})

export class AppComponent{
	title : string ;
	name : string ;

	ngOnInit(){
	this.title="angular assignment";
	this.name="Swati";
}
}
