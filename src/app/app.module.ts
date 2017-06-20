import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RouteComponent } from './route/route.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {DeliveryService} from "./delivery.service";

import {AppRoutingModule} from "./app-routing/app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    RouteComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpModule,FormsModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
