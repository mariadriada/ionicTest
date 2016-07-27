import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Alert } from 'ionic-angular';

/*
  Generated class for the AlertsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alerts/alerts.html',
})
export class AlertsPage {

  constructor(private nav: NavController) {
    this.nav = nav;
  }

  doAlert() {
    let alert = Alert.create({
      title: 'Title of basic alert!',
      subTitle: 'This is a message of basic alert to be accepted by the user',
      buttons: ['OK']
    });
    this.nav .present(alert);
    }
}
