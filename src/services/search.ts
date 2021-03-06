import {HttpClient} from '@angular/common/http';
import {locationService} from "./location";
import { Injectable, OnInit} from "@angular/core";
import {key} from "../Utility/key";
import {preferences} from "../Utility/preferences";


@Injectable()
export class searchService implements OnInit{

constructor(private pref:preferences, private locationSvc:locationService, private httpClient: HttpClient, private keyConst: key){};

ngOnInit(){


}

//range: string = "1000";

url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.keyConst.APIKEY}&radius=`;

detailsUrl: string = `https://maps.googleapis.com/maps/api/place/details/json?key=${this.keyConst.APIKEY}&placeid=`;

pageTokenUrl: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.keyConst.APIKEY}&pagetoken=`

rankby:string="prominence";

//&openow=

  //prominence
  //
  // distance



getAllNearbyPoints(){

  this.httpClient.get(this.url);

}

searchByType(type: string): Promise<any>{


  var url: string = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.keyConst.APIKEY}&radius=${this.pref.range}&type=${type}&location=${this.locationSvc.currentLocation[0]}&rankby=${this.rankby}`;

  // if(this.rankby == "distance"){
  //
  //   url= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.keyConst.APIKEY}&type=${type}&location=${this.locationSvc.currentLocation[0]}&rankby=${this.rankby}`;
  //
  // }


//var appendedUrl = this.url + this.range + "&type=" +type + "&location=" + this.locationSvc.currentLocation[0];

console.log(url);
  return this.httpClient.get(url)
    .take(1)
    .toPromise();
}


getPlaceDetails(placeid: string): Promise<any>{

  return this.httpClient.get(this.detailsUrl + placeid )
    .take(1)
    .toPromise()



}


getAdditional(token: string): Promise<any>{

  //console.log("!!!!!!!!! URL called by getAdditional is: ", this.pageTokenUrl + token);

  return this.httpClient.get(this.pageTokenUrl + token)
    .take(1)
    .toPromise()

}










}
