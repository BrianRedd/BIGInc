import { Component, OnInit } from '@angular/core';
import { flyInOut } from "../animations/app.animation";

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	host: {
		"[@flyInOut]": "true",
		"style": "display: block;"
	},
	animations: [
		flyInOut()
	]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
