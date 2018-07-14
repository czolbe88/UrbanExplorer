import {Component, OnInit} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {locationService} from "../services/location";
import {searchService} from "../services/search";
import {distanceService} from "../services/distance";
import {types} from "../services/types";
import {typeContainer} from "../models/typeContainer";
import {sortingUtility} from "../Utility/sorting";
import {AppPreferences} from "@ionic-native/app-preferences";
import {preferences} from "../Utility/preferences";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{


  rootPage:any = TabsPage;


//why does adding the private modifier make a difference?
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private pref:preferences, private locSvc: locationService,private appPref: AppPreferences, private sortingUtility: sortingUtility, private searchSvc: searchService, private distSvc: distanceService, private typeSvc: types) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //console.log("current range is: ", searchSvc.getRange());





    });
  }

  ngOnInit(){

    this.locSvc.watchLocation();


    this.appPref.fetch("SEARCHPARAMETERS", "TYPES").then(resp=>{

      //resp returns a list containing typeContainers

      console.log("FETCHED STORED PREF : ", resp);
      this.typeSvc.selectedPOIContainer = resp;
      //console.log(">>>>>>>>typeSvc.selectedPOIContainer is now", this.typeSvc.selectedPOIContainer);

    }).catch(error=>{console.log(error)})



  }

  range:number = this.pref.range;


  updateRange(event){


    this.pref.range = event.value.toString();

    this.checkUnits();

    console.log(this.pref.units);


  }



  updateUnits(event){


    var uom: string = event.toString();


    if (uom == 'metric' && this.range >= 1000){

      this.pref.units[0] = 'km';

    }
    else if(uom == 'metric'){
      this.pref.units[0] = 'm';
    }
    else if (uom =='imperial'){
      this.pref.units[0] = 'miles';

    }
    console.log(this.pref.units);
    console.log("units selected: ", event);

  }

  //to be called when range is altered
  checkUnits(){

    var uom = this.pref.units[0];

    if (uom !='miles' && this.range >= 1000){

      this.pref.units[0] = 'km';
      console.log('*km');

    }
    else if(uom != 'miles'){
      this.pref.units[0] = 'm';
      console.log('*m');
    }

  }


  updateSortBy(event){


    this.pref.sortby = event.toString();


    console.log(event);

    for( let container of this.typeSvc.selectedPOIContainer) {

      this.sortingUtility.sortContainer(container);

    }


    // switch (event.toString()) {
    //   case("distance"): {
    //
    //     console.log("case: distance");
    //     for( let container of this.typeSvc.selectedPOIContainer) {
    //
    //       container.POI.sort( function(a,b){return a.distance - b.distance});
    //
    //     }
    //
    //
    //
    //
    //     break;
    //   }
    //
    //   case("rating"): {
    //
    //     console.log("case: rating");
    //     for( let container of this.typeSvc.selectedPOIContainer) {
    //
    //       container.POI.sort( function(a,b){
    //         console.log(`comparing ${a.rating},${b.rating}`);
    //         return a.rating - b.rating});
    //
    //
    //     }
    //
    //
    //     break;
    //   }
    //
    //
    //   case("alphabetical"): {
    //
    //     console.log("case: alphabetical");
    //     for( let container of this.typeSvc.selectedPOIContainer) {
    //
    //
    //       container.POI.sort( function(a,b){
    //
    //         var nameA = a.name.toUpperCase();
    //         var nameB = b.name.toUpperCase();
    //
    //         if(nameA < nameB) return -1;
    //
    //         else if(nameA > nameB) return 1;
    //
    //         else return 0;
    //
    //       });
    //
    //       console.log(container.POI);
    //
    //
    //     }
    //
    //
    //
    //
    //     break;
    //   }
    //
    //
    // }






  }




}
