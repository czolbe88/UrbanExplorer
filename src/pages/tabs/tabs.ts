import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {SelectionPage} from "../selection/selection";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = SelectionPage;

  constructor() {

  }
}
