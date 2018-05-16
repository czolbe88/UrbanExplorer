import {NgModule, ErrorHandler, ChangeDetectorRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {HttpClientModule} from '@angular/common/http';
import {locationService} from "../services/location";
import {searchService} from "../services/search";
import {types} from "../services/types";
import {SelectionPage} from "../pages/selection/selection";
import {key} from "../Utility/key";
import {distanceService} from "../services/distance";
import {SettingsPage} from "../pages/settings/settings";
import {photoService} from "../services/photo";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SelectionPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SelectionPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    searchService,
    locationService,
    types,
    key,
    distanceService,
    photoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
