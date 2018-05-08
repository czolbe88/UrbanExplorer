import {Injectable} from "@angular/core";


@Injectable()
export class locationService{

  currentLocation: string[] = new Array();


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
          console.log(">>>location.ts current location is: ", this.currentLocation);
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




}
