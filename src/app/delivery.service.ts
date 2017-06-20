import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { vehicleInsert } from "./vehicle/vehicle.component";
import { RouteInsert } from "./route/route.component";

@Injectable()
export class DeliveryService {
private vehicleURL:string ="http://localhost:8082/vehicle-app/vehicle/getAll";
private vehiclePost:string="http://localhost:8082/vehicle-app/vehicle/insert";
private vehicleDelete:string="http://localhost:8082/vehicle-app/vehicle";
private vehicleUpdate:string="http://localhost:8082/vehicle-app/vehicle/update";
private vehicleSearchById:string="http://localhost:8082/vehicle-app/vehicle";
private vehicleSearchByMake:string="http://localhost:8082/vehicle-app/vehicle/searchByMake?vehicle_Make=";
  // ************************************************************
private routeGetAll:string ="http://localhost:8082/vehicle-app/route/getAll";
private routePost:string="http://localhost:8082/vehicle-app/route/insert";
private routeDelete:string="http://localhost:8082/vehicle-app/route";
private routeUpdate:string="http://localhost:8082/vehicle-app/route/update";
private routeSearchByCity :string="http://localhost:8082/vehicle-app/route/search?startCity=";
private routeSearchByDestionation:string="http://localhost:8082/vehicle-app/route/searchByEndDest?destination=";



  constructor(private http:Http) { }
  getAllVehicle():Observable<Response>{
    return this.http.get(this.vehicleURL);
  }
  postService(vehicle:vehicleInsert):Observable<Response>{
    return this.http.post(this.vehiclePost,vehicle);
  }
  deleteVehicle(id:number):Observable<Response>{
    return this.http.delete(this.vehicleDelete+"/"+id);

  }
  putVehicle(Update:vehicleInsert):Observable<Response>{
    return this.http.put(this.vehicleUpdate,Update);
  }
  getById(id:number):Observable<Response>{
    return this.http.get(this.vehicleSearchById+"/"+id);
  }
  getByMake(make:string):Observable<Response>{
    //console.log(this.vehicleSearchByMake+make);
    return this.http.get(this.vehicleSearchByMake+make);
  }


  // ************************************************************
  getAllRoute():Observable<Response>{
    return this.http.get(this.routeGetAll);
  }
  postRoute(route:RouteInsert):Observable<Response>{
    return this.http.post(this.routePost,route);
  }
  deleteRoute(id:number):Observable<Response>{
    return this.http.delete(this.routeDelete+"/"+id);
  }
  putRoute(update:RouteInsert):Observable<Response>{
    return this.http.put(this.routeUpdate,update);
  }
  getByCity(city:string):Observable<Response>{
    return this.http.get(this.routeSearchByCity+city);
  }
  getByDest(dest:string):Observable<Response>{
    return this.http.get(this.routeSearchByDestionation+dest);
  }
 
}