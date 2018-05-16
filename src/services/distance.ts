import {Injectable} from "@angular/core";
import {key} from "../Utility/key";
import {locationService} from "./location";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class distanceService {

constructor(private keyconst: key, private locationServ: locationService, private httpClient:HttpClient){}


  readonly APIKEY:string = this.keyconst.APIKEY;



  url:string = `https://maps.googleapis.com/maps/api/distancematrix/json?key=${this.APIKEY}&units=metric&origins=`; //change units to imperial for miles

  getDistance(destination:string): Promise<any> {


    var reqUrl: string = this.url +this.locationServ.currentLocation+ "&destinations=" + destination;

    console.log(reqUrl);

    return this.httpClient.get(reqUrl)
      .take(1)
      .toPromise();

    //TODO: Find out why distance can be more than 1km...




  }












}
