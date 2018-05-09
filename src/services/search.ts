import {HttpClient} from '@angular/common/http';
import{types} from './types';
import {locationService} from "./location";
import { Injectable, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";


@Injectable()
export class searchService implements OnInit{

constructor(private locationSvc:locationService, private httpClient: HttpClient, private typeService: types){};

ngOnInit(){


}

selectedTypes: string[] = this.typeService.selectedTypes;

readonly key:string = "DEL"; //DELETE before pushing to repo

url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.key}&radius=1000&type=`;

url2: string = `https://maps.googleapis.com/maps/api/place/details/json?key=${this.key}&placeid=`;

getAllNearbyPoints(){

  this.httpClient.get(this.url);

}

searchByType(type: string): Promise<any>{

var appendedUrl = this.url +type + "&location=" + this.locationSvc.currentLocation;
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
