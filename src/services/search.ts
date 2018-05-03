import {HttpClient} from '@angular/common/http';
import{types} from './types';
import {locationService} from "./location";
import {Injectable} from "@angular/core";


@Injectable()
export class searchService {

constructor(private locationSvc:locationService, private httpClient: HttpClient, private typeContainer: types){};

allTypes: string[] = this.typeContainer.allTypes;
selectedTypes: string[];
currentLocation: string = this.locationSvc.currentLocation;
readonly key:string = "INSERT KEY HERE"; //DELETE before pushing to repo

url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.key}&radius=1000&location=${this.currentLocation}&type=`


getAllNearbyPoints(){

  this.httpClient.get(this.url);



}






}
