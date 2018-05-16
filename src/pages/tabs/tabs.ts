import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {SelectionPage} from "../selection/selection";
import {SettingsPage} from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SelectionPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
