import {Injectable} from "@angular/core";
import {key} from "../Utility/key";
import {locationService} from "./location";
import {HttpClient} from "@angular/common/http";

//NOT IN USE
@Injectable()
export class distanceService {

constructor(private keyconst: key, private locationServ: locationService, private httpClient:HttpClient){}


  readonly APIKEY:string = this.keyconst.APIKEY;

  units:string="metric"; //default is metric


  //url:string = `https://maps.googleapis.com/maps/api/distancematrix/json?key=${this.APIKEY}&units=metric&origins=`; //change units to imperial for miles

  getDistance(destination:string): Promise<any> {


    var url:string = `https://maps.googleapis.com/maps/api/distancematrix/json?key=${this.APIKEY}&units=${this.units}&origins=${this.locationServ.currentLocation[0]}&destinations=${destination}`; //change units to imperial for miles

    //var reqUrl: string = this.url +this.locationServ.currentLocation[0] + "&destinations=" + destination;

    console.log(url);

    return this.httpClient.get(url)
      .take(1)
      .toPromise();

    //TODO: Find out why distance can be more than 1km...




  }












}
