import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {locationService} from "../services/location";
import {searchService} from "../services/search";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;





  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, locSvc: locationService,  public searchSvc: searchService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      locSvc.watchLocation();
      //console.log("current range is: ", searchSvc.getRange());





    });
  }

  range:number = parseInt(this.searchSvc.range);

  updateRange(event){

    //console.log("current range value in service: ", this.searchSvc.getRange());
    this.searchSvc.range = event.value.toString();



  }




}
