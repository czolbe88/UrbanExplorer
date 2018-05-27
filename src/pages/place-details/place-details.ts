import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {place} from "../../models/place";


/**
 * Generated class for the PlaceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-details',
  templateUrl: 'place-details.html',
})
export class PlaceDetailsPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private viewCtrl: ViewController) {
  }

  POIObject: place =  this.navParams.get('POI');



  ionViewDidLoad() {
    console.log("place details loaded as ", this.POIObject);
    console.log('ionViewDidLoad PlaceDetailsPage');
  }

  dismiss(){

    this.viewCtrl.dismiss();

  }

}
