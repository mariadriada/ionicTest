import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Alert, RadioButton } from 'ionic-angular';

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

  doAlertPropmt() {
    let prompt = Alert.create({
      title: "login",
      message: "Enter a text",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked!');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked!');
          }
        }
      ] 
    });
    this.nav .present(prompt);
  }

  doAlertConfirm() {
    let confirm = Alert.create({
      title: 'Title',
      message: 'Ask a question',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree Clicked!');
          }          
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree Clicked!');
          }
        }
      ]
    });
    this.nav .present(confirm);
  }

  doRadio() {
    let alert = Alert.create();
    alert.setTitle('Alert with radio button');
    alert.setMessage('Select a color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: false
    });

   alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });
    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data  => {     
        console.log('ok', data);
      }
    });
    this.nav .present(alert);
  };

  doCheckbox() {
    let alert = Alert.create();
    alert.setTitle('Alert title');

    alert.addInput({
      type: 'checkbox',
      label: 'checkbox label',
      value: 'checkbox value',
      checked: false
    });

    alert.addInput({
      type: 'checkbox',
      label: 'checkbox 2 label',
      value: 'checkbox 2 value ',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('checkbox data: ', data);        
      }
    });
    this.nav .present(alert);
  }
}
