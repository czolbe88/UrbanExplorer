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
  friendlyTypes: string[] = this.typesService.friendlyTypes;

  constructor(private appPreference: AppPreferences,  private typesService: types) {
  }

  ngOnInit() {

    // this.allTypes = this.typesService.allTypes;
    console.log(">>>selection.ts selected types are: ", this.typesService.selectedPOIContainer);

  }

  toggleSelection(selection: string, event){


    if(event.checked){

      this.addSelection(selection);

    }
    else{

      this.removeSelection(selection);

    }
    console.log(event.checked);

  }


  addSelection(i:string){

    let  typeContainer: typeContainer = {
      type: i.replace(/ /g, '_'),
      friendlyType: i,
      POI: [],
      display: true,
      pagetoken: ""

    };



    this.typesService.selectedPOIContainer.push(typeContainer);
    console.log("selected types (containers) are now: ", this.typesService.selectedPOIContainer);

  }


  removeSelection(i:string){


    var indexNo: number = this.typesService.selectedPOIContainer.findIndex(x=> x.friendlyType == i);
    this.typesService.selectedPOIContainer.splice(indexNo, 1);




    console.log("selected types (containers) are now: ", this.typesService.selectedPOIContainer);


  }

  checkIfSelected(i: string): boolean{

    if( this.typesService.selectedPOIContainer != null) {


      var index = this.typesService.selectedPOIContainer.findIndex(x => x.friendlyType == i);
      if (index > -1) {
        return true;
      }
    }

    else return false;





  }

  //save to preferences when navigating away from selection page
  ionViewWillLeave() {


    this.appPreference.store("SEARCHPARAMETERS", "TYPES", this.typesService.selectedPOIContainer);
    console.log("LEFT selection.html view and saved preferences!");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

}
