import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './../vehicle/vehicle.component';
import { RouteComponent } from './../route/route.component';
import { AboutComponent } from './../about/about.component';
import { HomeComponent } from './../home/home.component';

const routes : Routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"vehicle",component:VehicleComponent},
    {path:"route",component:RouteComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
