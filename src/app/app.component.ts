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
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'Overview', component: OverviewPage },
      { title: 'Cafeteria Breakfast', component: CafeteriaBreakfastPage },
      { title: 'Cafeteria Lunch', component: CafeteriaLunchPage },
      { title: 'Casual', component: CasualPage },
      { title: 'QSR', component: QsrRestaurantPage },
      { title: 'Recreation', component: RecreationPage },
      { title: 'Calculator', component: CalculatorPage },

      { title: 'Hello Ionic FR', component: HelloIonicFRPage },
      { title: 'Overview FR', component: OverviewFRPage },
      { title: 'Cafétérias DÉJEUNER', component: CafeteriaBreakfastFRPage },
      { title: 'Cafétérias DÎNER', component: CafeteriaLunchFRPage },
      { title: 'Secteur des restaurants décontractés', component: CasualFRPage },
      { title: 'Restauration rapide', component: QsrRestaurantFRPage },
      { title: 'Secteur récréatif', component: RecreationFRPage },
      { title: 'Calculator FR', component: CalculatorFRPage },

      { title: 'CHART Overview', component: CHARTOverviewPage },
      { title: 'CHART Cafeteria Breakfast', component: CHARTCafeteriaBreakfastPage },
      { title: 'CHART Cafeteria Lunch', component: CHARTCafeteriaLunchPage },
      { title: 'CHART Casual', component: CHARTCasualPage },
      { title: 'CHART QSR', component: CHARTQsrRestaurantPage },
      { title: 'CHART Recreation', component: CHARTRecreationPage }

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
