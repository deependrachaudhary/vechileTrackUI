import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../delivery.service';

@Component({
  selector: 'app-route',
  templateUrl: '/src/app/route/route.component.html',
  styleUrls: ['src/app/route/route.component.css']
})
export class RouteComponent implements OnInit {
  private routeList:RouteInsert[];
  private routePost:RouteInsert;
  private edit:boolean;
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.getAllRoute();
    this.routePost=new RouteInsert();
     this.edit=false;
  }
  getAllRoute():void{
    this.deliveryService.getAllRoute().subscribe(
      data=>this.routeList=data.json().routeVos
    );
  }
  //************ */
  getByCity(city:string):void{
    this.deliveryService.getByCity(city).subscribe(
      data=>this.routeList=data.json().routeVos
    );
  }
  getByDestionation(dest:string){
    this.deliveryService.getByDest(dest).subscribe(
      data=>this.routeList=data.json().routeVos
    );
  }
  postRoute():void{
    this.deliveryService.postRoute(this.routePost).subscribe(
      data=>this.getAllRoute(),
       error=>alert(error.json().errorDesc)
    );
  }
  deleteroute(Id:number):void{
    this.deliveryService.deleteRoute(Id).subscribe(
      data=>this.getAllRoute()
    );
  }
  putButton(vm:RouteInsert):void{
      this.edit=true;
      this.routePost=Object.assign({},vm);
  }
  putRoute():void{
    this.edit=false;
    this.deliveryService.putRoute(this.routePost).subscribe(
      data=>this.getAllRoute(),
      error=>alert(error.json().errorDesc)
    );
  }
   cancleButton():void{
    this.edit=false;
  }
}
export class RouteInsert{
    id:number;
    startCity:string;
    startTime:string;
    endTime:string;
    endDestination:string;
    routeName:string
}
