import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {ActionSheetsPage} from '../action-sheets/action-sheets';
import {AlertsPage} from '../alerts/alerts';
import {BadgesPage} from '../badges/badges';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private tab5Root: any;
  private tab6Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
    this.tab4Root = ActionSheetsPage;
    this.tab5Root = AlertsPage;
    this.tab6Root = BadgesPage;
  }
}
