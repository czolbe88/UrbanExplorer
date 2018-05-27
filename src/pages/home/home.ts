import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {locationService} from "../../services/location";
import {searchService} from "../../services/search";
import {types} from "../../services/types";
import 'rxjs/add/operator/take';
import {place} from "../../models/place";
import {distanceService} from "../../services/distance";
import {ModalController} from "ionic-angular";
import {PlaceDetailsPage} from "../place-details/place-details";
import {LoadingController} from "ionic-angular";
import {photoService} from "../../services/photo";
import {typeContainer} from "../../models/typeContainer";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private searchServ: searchService, private typeServ: types, private locationServ: locationService,
              private distanceServ: distanceService, private modal: ModalController, private loadingCtrl: LoadingController, private photoServ: photoService) {

  }

  ngOnInit() {
  }

  currentLocation: string[] = this.locationServ.currentLocation;

  //container for POIContainers by type
  selectedPOIContainer: typeContainer[] = this.typeServ.selectedPOIContainer;

  //container for ALL POI
  foundPOI:place[] = [];

  distUnit: string ="";

   rootPage: any = TabsPage;


//REFRESH BUTTON
  getAllUserPOI() {

    let loading = this.loadingCtrl.create({
      content: "Loading"

    });

    loading.present();

    //TODO: Create loading utility if needed on more than one page

    //clear all
    this.foundPOI.length = 0;

    for (let typeContainer of this.typeServ.selectedPOIContainer) {

      var type = typeContainer.type;

      //clear all container contents
      typeContainer.POI.length = 0;

      this.searchServ.searchByType(type).then(
        (resp) => {

          console.log("placesearch resp: ", resp);

          if (resp['status'] == "OK") {

            var POIList = resp['results'];



            for (let POI of POIList) {

              //console.log("POI", POI);


                let POIObject:place = {

                placeid: POI['place_id'],
                icon: POI['icon'],
                name: POI['name'],
                //open:  POI['opening_hours']['open_now'],
                location: POI['geometry']['location'],
                  //details
                  address: null,
                  phone: null,
                  opening_hours: null,
                  rating: null,
                  website: null,
                types: POI['types'],

                  //photo
                  photoRefContainer: [] ,
                  photoUrlContainer: [],

                  //distance
                  distance: null


              }

              this.searchServ.getPlaceDetails(POIObject.placeid)
                .then((resp)=>{
                  console.log("getPlaceDetails resp: ", resp);
                  POIObject.rating = resp['result']['rating'];
                  POIObject.website = resp['result']['website'];
                  POIObject.address = resp['result']['formatted_address'];
                  POIObject.phone = resp['result']['formatted_phone_number'];
                  POIObject.opening_hours = resp['result']['opening_hours'];
                  POIObject.photoRefContainer = resp['result']['photos'];


                  console.log("POIObject is: ", POIObject);

                  if(POIObject.photoRefContainer.length > 0) {

                    for (let photoref of POIObject.photoRefContainer) {

                      //console.log("photoref is: ", photoref);

                      var ref = photoref['photo_reference'];

                      var photoUrl: string = this.photoServ.getPhoto(ref);

                      POIObject.photoUrlContainer.push(photoUrl);


                    }
                  }

                })
                .catch((error)=>{
                  //console.log(">>> getPlaceDetails error: ", error); //SUPPRESSED!!!! TODO: HANDLE THIS PROPERLY!
                })


              var POIdestination = POIObject.location['lat'].toString() +"," +  POIObject.location['lng'].toString();
                console.log("POIDest is: ", POIdestination);

              this.distanceServ.getDistance(POIdestination).then((resp)=>{

                //console.log(">>> distance matrix service is:", resp);
                var distString: string = resp['rows'][0]['elements'][0]['distance']['text'];
                var distStringArray: string[] = distString.split(" ");
                //console.log("DISTSTRINGARRAY:", distStringArray);

                this.distUnit = distStringArray[1];
                POIObject.distance = parseFloat(distStringArray[0]);
                //POIObject.distance = resp['rows'][0]['elements'][0]['distance']['text'];
                console.log("POIObject distance: ", POIObject.distance);
              }).catch((error)=>{
                console.log(">>>getDistance error: ", error);
              })



              //console.log("POIObject", POIObject);

              //push into both containers
              typeContainer.POI.push(POIObject);
               this.foundPOI.push(POIObject);

            }

            //console.log(">>> home.ts getAllUserPOI() resp= ", resp)




          }


          else if (resp['status'] != "OK"){ console.log(`>>>WARNING>>> search for type ${type}: `, resp['status'])}
        }
      ).catch((error) => {
        console.log(error);
      })


    }

    loading.dismiss();


  }

  //open modal
  openPlaceDetails(placeId: string){

    var POIObject: place = this.foundPOI.find(x=> x.placeid == placeId);

    const myModal = this.modal.create('PlaceDetailsPage', { POI: POIObject});

    myModal.present();


  }



}
