import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{types} from '../../services/types';

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


  allTypes: string[] = [];
  selectedTypes: string[] = this.typesService.selectedTypes; //TODO: DELETE WHEN REPLACED
  selectedPOIContainers: any[] = this.typesService.selectedPOIContainer; //TODO: CREATE MODEL FOR POIContainer

  constructor(public navCtrl: NavController, public navParams: NavParams, private typesService: types) {
  }

  ngOnInit() {

    this.allTypes = this.typesService.allTypes;
    console.log(">>>selection.ts selected types are: ", this.typesService.selectedTypes);

  }


addSelection(i:string){

    console.log(`selection.ts added ${i} from selection`);
    this.typesService.selectedTypes.push(i);
    console.log("selected types are now: ", this.typesService.selectedTypes);


}

  addSelection2(i:string){

    let  typeContainer = { type: i, foundPOI: [] };
    this.typesService.selectedPOIContainer.push(typeContainer);
    console.log("selected types (containers) are now: ", this.typesService.selectedPOIContainer);

  }

removeSelection(i:string){

  console.log(`selection.ts removed ${i} from selection`);
  var indexNo = this.typesService.selectedTypes.indexOf(i);
  this.typesService.selectedTypes.splice(indexNo, 1);
  console.log("selected types are now: ", this.typesService.selectedTypes);

}

  removeSelection2(i:string){

    var indexNo = this.typesService.selectedPOIContainer.find(x=> x.type == i);
    this.typesService.selectedPOIContainer.splice(indexNo, 1);
    console.log("selected types (containers) are now: ", this.typesService.selectedPOIContainer);


  }

  checkIfSelected(i: string): boolean{

    return this.typesService.selectedPOIContainer.find(x=> x.type == i);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

}
