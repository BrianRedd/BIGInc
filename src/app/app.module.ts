import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		AboutComponent,
		ContactComponent,
		HomeComponent,
		ServicesComponent,
		FooterComponent,
		ThankyouComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		//	HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
