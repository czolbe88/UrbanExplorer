import {Component, OnInit} from '@angular/core';
import { IonicPage} from 'ionic-angular';
import{types} from '../../services/types';
import {typeContainer} from "../../models/typeContainer";
import {AppPreferences} from "@ionic-native/app-preferences";

/**
 * Generated class for the SelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage implements OnInit {


  allTypes: string[] = this.typesService.allTypes;

  constructor(private appPreference: AppPreferences,  private typesService: types) {
  }

  ngOnInit() {

    // this.allTypes = this.typesService.allTypes;
    console.log(">>>selection.ts selected types are: ", this.typesService.selectedPOIContainer);

  }


  addSelection(i:string){

    let  typeContainer: typeContainer = {
      type: i,
      friendlyType: i.replace(/_/g,' ') ,
      POI: [],
      display: true,
      pagetoken: ""

    };

    var storedTypePref: typeContainer[] = [];

    this.appPreference.fetch("SEARCHPARAMETERS", "TYPES").then(resp=>{

      console.log(">>>STORED TYPE PREF: ", resp);
      storedTypePref = resp;

    }).catch(error=>{console.log(error)})

    storedTypePref.push(typeContainer);

    this.appPreference.store("SEARCHPARAMETERS", "TYPES", storedTypePref);
    this.typesService.selectedPOIContainer.push(typeContainer);
    console.log("selected types (containers) are now: ", this.typesService.selectedPOIContainer);

  }


  removeSelection(i:string){


    var indexNo: number = this.typesService.selectedPOIContainer.findIndex(x=> x.type == i);
    this.typesService.selectedPOIContainer.splice(indexNo, 1);




    console.log("selected types (containers) are now: ", this.typesService.selectedPOIContainer);


  }

  checkIfSelected(i: string): boolean{

    var index = this.typesService.selectedPOIContainer.findIndex(x=> x.type == i);
    if (index > -1){
      return true;
    }
    else return false;





  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

}
