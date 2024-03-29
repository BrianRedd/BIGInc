import { Routes } from "@angular/router";

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { ThankyouComponent } from '../thankyou/thankyou.component';

export const routes: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "about", component: AboutComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "services", component: ServicesComponent },
	{ path: "thankyou", component: ThankyouComponent },
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "**", component: HomeComponent }
	
];