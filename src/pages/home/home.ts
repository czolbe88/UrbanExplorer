import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {locationService} from "../../services/location";
import {searchService} from "../../services/search";
import {types} from "../../services/types";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private searchServ: searchService, private typeServ: types) {

  }


  selectedTypes: string[] = this.typeServ.selectedTypes;



  getAllUserPOI(){

    //TODO

    // for(let type in this.selectedTypes){
    //
    //   this.searchServ.searchByType(type).get
    //
    //
    // }



  }






}
