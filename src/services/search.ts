import {HttpClient} from '@angular/common/http';
import{types} from './types';
import {locationService} from "./location";
import { Injectable, OnInit} from "@angular/core";


@Injectable()
export class searchService implements OnInit{

constructor(private locationSvc:locationService, private httpClient: HttpClient, private typeService: types){};

ngOnInit(){


}

selectedTypes: string[] = this.typeService.selectedTypes;

readonly key:string = "XXX"; //DELETE before pushing to repo

url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.key}&radius=1000&type=`;

url2: string = `https://maps.googleapis.com/maps/api/place/details/json?key=${this.key}&placeid=`;

getAllNearbyPoints(){

  this.httpClient.get(this.url);

}

searchByType(type: string){



var appendedUrl = this.url +type + "&location=" + this.locationSvc.currentLocation;
console.log(appendedUrl);
  this.httpClient.get(appendedUrl )
    .take(1)
    .toPromise()
    .then(
      (resp)=>{
        console.log(resp);
        return resp;
      }
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    );

}

getPlaceDetails(placeid: string){

  this.httpClient.get(this.url2 + placeid )
    .take(1)
    .toPromise()
    .then(
      (resp)=>{
        return resp;
      }
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    );

}








}
