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

selectedTypes: string[] = this.typeService.selectedTypes;


url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.keyConst.APIKEY}&radius=1000&type=`;

url2: string = `https://maps.googleapis.com/maps/api/place/details/json?key=${this.keyConst.APIKEY}&placeid=`;


getAllNearbyPoints(){

  this.httpClient.get(this.url);

}

searchByType(type: string): Promise<any>{

var appendedUrl = this.url +type + "&location=" + this.locationSvc.currentLocation[0];
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
