import { Component, OnInit } from '@angular/core';
import {DeliveryService} from '../delivery.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: '/src/app/vehicle/vehicle.component.html',
  styleUrls: ['src/app/vehicle/vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  private vehiclePost:vehicleInsert;
  private vehicleList:vehicleInsert[];
  private edit:boolean;
  constructor(private deliveryService:DeliveryService) { }

  ngOnInit() {
    this.gertAllVechicle();
    this.vehiclePost= new vehicleInsert();
    this.edit=false;
  }
  gertAllVechicle():void{
    this.deliveryService.getAllVehicle().subscribe(
      data=>this.vehicleList=data.json().vehicleVo
    );
  }
  //******************* */
  getVehicleId(id:number):void{
    this.deliveryService.getById(id).subscribe(
      data => this.vehicleList = data.json().vehicleVo
    );
  }
  getVehicleByMake(make:string):void{
    console.log(make);
    this.deliveryService.getByMake(make).subscribe(
      data=>this.vehicleList=data.json().vehicleVo
    );
  }
  postVehicle():void{
    this.deliveryService.postService(this.vehiclePost).subscribe(
      data=>this.gertAllVechicle(),
      error=>alert(error.json().errorDesc)
    );
  }
  deleteVehicle(id:number):void{
    this.deliveryService.deleteVehicle(id).subscribe(
      data=>this.gertAllVechicle()
    );
  }
  putButton(vm:vehicleInsert):void{
    this.edit=true;
    this.vehiclePost=Object.assign({},vm);
  }
  putVehicle():void{
    this.edit=false;
   
    this.deliveryService.putVehicle(this.vehiclePost).subscribe(
      data=>this.gertAllVechicle(),
      error=>alert(error.json().errorDesc)
    );
  }
  cancleButton():void{
    this.edit=false;
  }
}
export class vehicleInsert{
    id: number;
    vehicle_color: string;
    vehicle_make: string;
    vehicle_model: string;
    vehicle_status: string;
    vehicle_type: string;
    vehicle_vin: string;
    vehicle_year: number
}