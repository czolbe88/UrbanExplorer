import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {locationService} from "../../services/location";
import {searchService} from "../../services/search";
import {types} from "../../services/types";
import 'rxjs/add/operator/take';
import {place} from "../../models/place";
import {distanceService} from "../../services/distance";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private searchServ: searchService, private typeServ: types, private locationServ: locationService,
              private distanceServ: distanceService) {

  }

  ngOnInit() {
  }

  currentLocation: string[] = this.locationServ.currentLocation;

  selectedTypes: string[] = this.typeServ.selectedTypes;

  foundPOI:place[] = [];


//REFRESH BUTTON
  getAllUserPOI() {

    this.foundPOI.length = 0; //clear all results, better than //this.foundPOI = [];

    //console.log("button clicked");
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
                location: POI['geometry']['location'],
                  //details
                  address: "",
                  phone: 0,
                  opening_hours: "",
                  rating: 999,
                types: [],

                  //distance
                  distance: ""


              }

              this.searchServ.getPlaceDetails(POIObject.placeid)
                .then((resp)=>{

                  console.log("getPlaceDetails resp: ", resp);




                })
                .catch((error)=>{
                  console.log(">>> getPlaceDetails error: ", error);
                })



              console.log(POIObject);
              var POIdestination = POIObject.location['lat'].toString() +"," +  POIObject.location['lng'].toString();

                //console.log("POIdestination is: ", POIdestination);

              this.distanceServ.getDistance(POIdestination).then((resp)=>{

                console.log(">>> distance matrix service is:", resp);
                POIObject.distance = resp['rows'][0]['elements'][0]['distance']['text'];
                console.log("POIObject distance: ", POIObject.distance);
              }).catch((error)=>{
                console.log(">>>getDistance error: ", error);
              })

              console.log("POIObject", POIObject);

               this.foundPOI.push(POIObject);

            }

            console.log(">>> home.ts getAllUserPOI() resp= ", resp)


          }

          else if (resp['status'] != "OK"){ console.log(`>>>WARNING>>> search for type ${type}: `, resp['status'])}
        }
      ).catch((error) => {
        console.log(error);
      })


    }


  }


}
