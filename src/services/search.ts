import {HttpClient} from '@angular/common/http';
import{types} from './types';
import {locationService} from "./location";
import {Injectable} from "@angular/core";


@Injectable()
export class searchService {

constructor(private locationSvc:locationService, private httpClient: HttpClient, private typeService: types){};


selectedTypes: string[] = this.typeService.selectedTypes;
currentLocation: string = this.locationSvc.currentLocation;
readonly key:string = "DELETE"; //DELETE before pushing to repo

url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.key}&radius=1000&location=${this.currentLocation}&type=`


getAllNearbyPoints(){

  this.httpClient.get(this.url);



}

searchByType(type: string){

  this.httpClient.get(this.url + type );

}








}
