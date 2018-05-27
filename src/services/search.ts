import {HttpClient} from '@angular/common/http';
import{types} from './types';
import {locationService} from "./location";
import { Injectable, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {key} from "../Utility/key";


@Injectable()
export class searchService implements OnInit{

constructor(private locationSvc:locationService, private httpClient: HttpClient, private typeService: types, private keyConst: key){};

ngOnInit(){


}

range: string = "1000";

url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.keyConst.APIKEY}&radius=`;

url2: string = `https://maps.googleapis.com/maps/api/place/details/json?key=${this.keyConst.APIKEY}&placeid=`;


rankby:string="";

//open

  //rankbyprominence or distance



getAllNearbyPoints(){

  this.httpClient.get(this.url);

}

searchByType(type: string): Promise<any>{

var appendedUrl = this.url + this.range + "&type=" +type + "&location=" + this.locationSvc.currentLocation[0];
console.log(appendedUrl);
  return this.httpClient.get(appendedUrl)
    .take(1)
    .toPromise();
}


getPlaceDetails(placeid: string): Promise<any>{

  return this.httpClient.get(this.url2 + placeid )
    .take(1)
    .toPromise()



}










}
