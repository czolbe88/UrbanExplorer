import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';
import {place} from "../../models/place";
import {ImageViewerController} from "ionic-img-viewer";
import {nativeFunctions} from "../../Utility/nativeFunctions";

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

  constructor(private nativeFunctions: nativeFunctions,private imageViewerCtrl:ImageViewerController, private navParams: NavParams, private viewCtrl: ViewController) {
  }

  POIObject: place =  this.navParams.get('POI');



  ionViewDidLoad() {
    console.log("place details loaded as ", this.POIObject);
    console.log('ionViewDidLoad PlaceDetailsPage');
  }

  dismiss(){

    this.viewCtrl.dismiss();

  }


  openFullScreen(myImage) {
    const imageViewer = this.imageViewerCtrl.create(myImage);
    imageViewer.present();

/*    setTimeout(() => imageViewer.dismiss(), 1000);
    imageViewer.onDidDismiss(() => alert('Viewer dismissed'));*/
  }

  callNum(poi:place){

    this.nativeFunctions.dialNumber(poi);

  }
  openBrowser(poi:place){

    this.nativeFunctions.goToBrowser(poi);

  }

}
