import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ButtonsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/buttons/buttons.html',
})
export class ButtonsPage {

  constructor(private nav: NavController) {

  }

  //Show icons list available
  doIconsStyle() {
    console.log('icon style');
    window.location.href = "http://ionicframework.com/docs/v2/ionicons/";    
   console.log('icon otra');  
}

}
