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

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{


  rootPage:any = TabsPage;

  selectedPOIContainer: typeContainer[] = this.typeSvc.selectedPOIContainer;



//why does adding the private modifier make a difference?
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private locSvc: locationService,private appPref: AppPreferences, private sortingUtility: sortingUtility, private searchSvc: searchService, private distSvc: distanceService, private typeSvc: types) {
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

  range:number = parseInt(this.searchSvc.range);


  updateRange(event){

    this.searchSvc.range = event.value.toString();

  }

  updateUnits(event){

    this.distSvc.units = event.toString();
    console.log("units selected: ", event);

  }


  updateSortBy(event){

    this.sortingUtility.sortBy = event.toString();



    console.log(event);

    switch (event.toString()) {
      case("distance"): {

        console.log("case: distance");
        for( let container of this.typeSvc.selectedPOIContainer) {

          container.POI.sort( function(a,b){return a.distance - b.distance});

        }




        break;
      }

      case("rating"): {

        console.log("case: rating");
        for( let container of this.typeSvc.selectedPOIContainer) {

          container.POI.sort( function(a,b){
            console.log(`comparing ${a.rating},${b.rating}`);
            return a.rating - b.rating});


        }


        break;
      }


      case("alphabetical"): {

        console.log("case: alphabetical");
        for( let container of this.typeSvc.selectedPOIContainer) {


          container.POI.sort( function(a,b){

            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();

            if(nameA < nameB) return -1;

            else if(nameA > nameB) return 1;

            else return 0;

          });

          console.log(container.POI);


        }




        break;
      }


    }






  }




}
