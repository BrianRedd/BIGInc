import { Component, OnInit } from '@angular/core';
import { flyInOut } from "../animations/app.animation";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Contact } from "../shared/contact";

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

	contactForm: FormGroup;
	contact: Contact;
	errMess: string;
	formErrors = {
		"name": "",
		"email": "",
		"subject": "",
		"message": ""
	};
	
	validationMessages = {
		"name": {
			"required": "Name is required.",
			"minlength": "Name must be at least 2 characters long."
		},
		"email": {
			"required": "Email is required.",
			"email": "Email not in valid format."
		},
		"subject": {
			"required": "Subject is required.",
			"minlength": "Subject must be at least 2 characters long."
		},
		"message": {
			"required": "Message is required.",
			"minlength": "Message must be at least 2 characters long."
		}
	};
	
	onValueChanged(data?: any) {
		if (!this.contactForm) { return; }
		const form = this.contactForm;
		for (const field in this.formErrors) {
			this.formErrors[field] = ''; //clears any existing messages
			const control = form.get(field);
			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + " ";
				}
			}
		}
	}
	
	constructor(
		private fb: FormBuilder
		//,private http: HttpClient
	) { }

	ngOnInit() {
		this.createForm();
	}

	createForm(): void {
		this.contactForm = this.fb.group({
			name: ["", [Validators.required, Validators.minLength(2)]],
			email: ["", [Validators.required, Validators.email]],
			subject: ["", [Validators.required, Validators.minLength(2)]],
			message: ["", [Validators.required, Validators.minLength(2)]]
			});

		this.contactForm.valueChanges
			.subscribe(data => this.onValueChanged(data));
			
		this.onValueChanged(); // (re)set form validation message
	}

	onSubmit() { //disabled because of basic Formspree
		this.contact = this.contactForm.value;
		console.log(this.contact);
	}

}
