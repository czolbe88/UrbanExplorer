import {Injectable} from "@angular/core";
import {place} from "../models/place";
import {CallNumber} from "@ionic-native/call-number";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class nativeFunctions{

  constructor(private callNum:CallNumber, private inAppBrowser:InAppBrowser){

  }



  dialNumber(poi:place){


    this.callNum.isCallSupported().then((result)=>{

      console.log("is call supported?", result);



    }).catch((error)=>{
      console.log("error when checking dialer: ", error);
    });



    if(poi.phone != undefined) {

      this.callNum.callNumber(poi.phone.toString(), true).then((result) => {
        console.log(`call is made to, ${poi.phone.toString()}, the result is: `, result)
      }).catch((error) => {
        console.log("error while attempting call: ", error);
      });
    }


  }

  goToBrowser(poi: place){

    if(poi.website!= undefined) {
      var browser = this.inAppBrowser.create(poi.website, '_system');
      browser.show();
    }

  }












}
