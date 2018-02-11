import { Component, OnInit } from '@angular/core';
import { flyInOut } from "../animations/app.animation";

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
	host: {
		"[@flyInOut]": "true",
		"style": "display: block;"
	},
	animations: [
		flyInOut()
	]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
