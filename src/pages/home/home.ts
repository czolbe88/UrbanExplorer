import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {locationService} from "../../services/location";
import {searchService} from "../../services/search";
import {types} from "../../services/types";
import 'rxjs/add/operator/take';
import {place} from "../../models/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private searchServ: searchService, private typeServ: types, private locationServ: locationService) {

  }

  ngOnInit() {


  }


  currentLocation: string[] = this.locationServ.currentLocation;

  selectedTypes: string[] = this.typeServ.selectedTypes;

  foundPOI:place[] = [];


//REFRESH BUTTON
  getAllUserPOI() {

    this.foundPOI = []; //clear all results

    console.log("button clicked");
    //console.log(this.selectedTypes);

    for (let type of this.selectedTypes) {

      this.searchServ.searchByType(type).then(
        (resp) => {

          if (resp['status'] == "OK") {

            var POIList = resp['results'];
            for (let POI of POIList) {

              console.log("POI", POI);

               let POIObject:place = {

                placeid: POI['place_id'],
                icon: POI['icon'],
                name: POI['name'],
                //open:  POI['opening_hours']['open_now'],
                location: POI['geometry']['location']

              }
              console.log("POIObject", POIObject);

               this.foundPOI.push(POIObject);

            }

            console.log(">>> home.ts getAllUserPOI() resp= ", resp)


          }
        }
      ).catch((error) => {
        console.log(error);
      })


    }


  }


}
