import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

//import { StatusBar } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { OverviewPage } from '../pages/overview/overview';
import { QsrRestaurantPage } from '../pages/qsr-restaurant/qsr-restaurant';
import { RecreationPage } from '../pages/recreation/recreation';
import { CasualPage } from '../pages/casual/casual';
import { CafeteriaBreakfastPage } from '../pages/cafeteria-breakfast/cafeteria-breakfast';
import { CafeteriaLunchPage } from '../pages/cafeteria-lunch/cafeteria-lunch';
import { CalculatorPage } from '../pages/calculator/calculator';

import { HelloIonicFRPage } from '../pages/hello-ionic-FR/hello-ionic-FR';
import { OverviewFRPage } from '../pages/overview-FR/overview-FR';
import { QsrRestaurantFRPage } from '../pages/qsr-restaurant-FR/qsr-restaurant-FR';
import { RecreationFRPage } from '../pages/recreation-FR/recreation-FR';
import { CasualFRPage } from '../pages/casual-FR/casual-FR';
import { CafeteriaBreakfastFRPage } from '../pages/cafeteria-breakfast-FR/cafeteria-breakfast-FR';
import { CafeteriaLunchFRPage } from '../pages/cafeteria-lunch-FR/cafeteria-lunch-FR';
import { CalculatorFRPage } from '../pages/calculator-FR/calculator-FR';

import { CHARTOverviewPage } from '../pages/chart-overview/overview';
import { CHARTQsrRestaurantPage } from '../pages/chart-qsr-restaurant/qsr-restaurant';
import { CHARTRecreationPage } from '../pages/chart-recreation/recreation';
import { CHARTCasualPage } from '../pages/chart-casual/casual';
import { CHARTCafeteriaBreakfastPage } from '../pages/chart-cafeteria-breakfast/cafeteria-breakfast';
import { CHARTCafeteriaLunchPage } from '../pages/chart-cafeteria-lunch/cafeteria-lunch';
import { CHARTCertificationPage } from '../pages/chart-certification/chart-certification';

import { CHARTOverviewFRPage } from '../pages/chart-overview-FR/overview-FR';
import { CHARTQsrRestaurantFRPage } from '../pages/chart-qsr-restaurant-FR/qsr-restaurant-FR';
import { CHARTRecreationFRPage } from '../pages/chart-recreation-FR/recreation-FR';
import { CHARTCasualFRPage } from '../pages/chart-casual-FR/casual-FR';
import { CHARTCafeteriaBreakfastFRPage } from '../pages/chart-cafeteria-breakfast-FR/cafeteria-breakfast-FR';
import { CHARTCafeteriaLunchFRPage } from '../pages/chart-cafeteria-lunch-FR/cafeteria-lunch-FR';
import { CHARTCertificationFRPage } from '../pages/chart-certification-FR/chart-certification-FR';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  public language = "EN";
  public pagenumber = 0;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },                                            //0
      { title: 'Overview', component: OverviewPage },                                                 //1
      { title: 'Cafeteria Breakfast', component: CafeteriaBreakfastPage },                            //2
      { title: 'Cafeteria Lunch', component: CafeteriaLunchPage },                                    //3
      { title: 'Casual', component: CasualPage },                                                     //4
      { title: 'QSR', component: QsrRestaurantPage },                                                 //5
      { title: 'Recreation', component: RecreationPage },                                             //6
      { title: 'Calculator', component: CalculatorPage },                                             //7

      { title: 'Hello Ionic FR', component: HelloIonicFRPage },                                       //8
      { title: 'Overview FR', component: OverviewFRPage },                                            //9
      { title: 'Cafétérias DÉJEUNER', component: CafeteriaBreakfastFRPage },                          //10
      { title: 'Cafétérias DÎNER', component: CafeteriaLunchFRPage },                                 //11
      { title: 'Secteur des restaurants décontractés', component: CasualFRPage },                     //12
      { title: 'Restauration rapide', component: QsrRestaurantFRPage },                               //13
      { title: 'Secteur récréatif', component: RecreationFRPage },                                    //14
      { title: 'Calculator FR', component: CalculatorFRPage },                                        //15

      { title: 'CHART Overview', component: CHARTOverviewPage },                                      //16  > 23
      { title: 'CHART Cafeteria Breakfast', component: CHARTCafeteriaBreakfastPage },                 //17  > 24
      { title: 'CHART Cafeteria Lunch', component: CHARTCafeteriaLunchPage },                         //18  > 25
      { title: 'CHART Casual', component: CHARTCasualPage },                                          //19  > 26
      { title: 'CHART QSR', component: CHARTQsrRestaurantPage },                                      //20  > 27
      { title: 'CHART Recreation', component: CHARTRecreationPage },                                  //21  > 28
      { title: 'CHART Certification', component: CHARTCertificationPage },                            //22  > 29

      { title: 'CHART Overview', component: CHARTOverviewFRPage },                                    //23  > 16
      { title: 'CHART Cafeteria Breakfast', component: CHARTCafeteriaBreakfastFRPage },               //24  > 17
      { title: 'CHART Cafeteria Lunch', component: CHARTCafeteriaLunchFRPage },                       //25  > 18
      { title: 'CHART Casual', component: CHARTCasualFRPage },                                        //26  > 19
      { title: 'CHART QSR', component: CHARTQsrRestaurantFRPage },                                    //27  > 20
      { title: 'CHART Recreation', component: CHARTRecreationFRPage },                                //28  > 21
      { title: 'CHART Certification', component: CHARTCertificationFRPage }                           //29  > 22
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      this.menu.close();

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  openSection(page) {
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
