import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheet } from 'ionic-angular';

/*
  Generated class for the ActionSheetsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/action-sheets/action-sheets.html',
})
export class ActionSheetsPage {

  constructor(private nav: NavController) {  
    this.nav = nav;
  }

  presentActionSheet() {
  let actionSheet = ActionSheet.create({
    title: 'Set the title of panel here',
    buttons: [
      {
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      },{
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  this.nav.present(actionSheet);
  }

}


