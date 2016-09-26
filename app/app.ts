import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  //template: '<ion-nav [root]="rootPage"></ion-nav>'
  templateUrl: 'build/app.html'
})

export /**
 * MyApp
 */
class  MyApp {
  
  private root: any; 

  pages: Array<{title: string, component:any}>

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

}



/*
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
*/

ionicBootstrap(MyApp);
