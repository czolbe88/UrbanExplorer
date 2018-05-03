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



  constructor(public navCtrl: NavController, public navParams: NavParams, private typesService: types) {
  }

  ngOnInit() {

  }

  allTypes: string[] = this.typesService.allTypes;


  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

}
