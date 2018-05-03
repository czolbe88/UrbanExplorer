import {Injectable} from "@angular/core";


@Injectable()
export class locationService{

  currentLocation: string ="";


  getLocation(){

    // console.log(">>> locationService: getLocation()");

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.watchPosition(
        position => {
          this.currentLocation = position.coords.latitude.toString() + "," + position.coords.longitude.toString();
          console.log(this.currentLocation);
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
