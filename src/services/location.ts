import {EventEmitter, Injectable, Output} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {key} from "../Utility/key";


@Injectable()
export class locationService {

  constructor(private httpClient: HttpClient, private keyConst: key){}

@Output()
  locationChanged = new EventEmitter<{newLoc: string;}>()


  currentLocation: string[] = new Array();

  url: string = `https://maps.googleapis.com/maps/api/geocode/json?key=${this.keyConst.APIKEY}&latlng=`






  //  getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition( (position)=>{
  //
  //       console.log(position.coords.latitude + "," + position.coords.longitude)
  //
  //       this.currentLocation =  position.coords.latitude + "," + position.coords.longitude});
  //
  //   } else {
  //
  //   }
  // }

//automatically update position -- yet to be tested
  watchLocation(){

    // console.log(">>> locationService: getLocation()");

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.watchPosition(
        position => {
          this.currentLocation[0] = position.coords.latitude.toString() + "," + position.coords.longitude.toString();
          this.locationChanged.emit({newLoc: this.currentLocation[0] }); //EVENT EMITTED
          //console.log(">>>location.ts current location is: ", this.currentLocation);

          this.reverseGeocode(this.url).then(
            (resp)=>{
              console.log("Current location: ", resp['results'][0]['formatted_address']);

              this.currentLocation[1] = resp['results'][0]['formatted_address'];
            }
          ).catch((error)=>{
            console.log(">>>WARNING ERROR in location.ts", error);
          })



        },
        error => {

          console.log(error.code);
          switch (error.code) {

            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };

  }

  reverseGeocode(url: string):Promise<any> {



    var appendedUrl = url + this.currentLocation[0];
    console.log(appendedUrl);
    return this.httpClient.get(appendedUrl)
      .take(1)
      .toPromise()
  }




}
