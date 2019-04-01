import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { MyApp } from './app.component';
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



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    OverviewPage,
    QsrRestaurantPage,
    RecreationPage,
    CasualPage,
    CafeteriaBreakfastPage,
    CafeteriaLunchPage,
    CalculatorPage,

    HelloIonicFRPage,
    OverviewFRPage,
    QsrRestaurantFRPage,
    RecreationFRPage,
    CasualFRPage,
    CafeteriaBreakfastFRPage,
    CafeteriaLunchFRPage,
    CalculatorFRPage,

    CHARTOverviewPage,
    CHARTQsrRestaurantPage,
    CHARTRecreationPage,
    CHARTCasualPage,
    CHARTCafeteriaBreakfastPage,
    CHARTCafeteriaLunchPage,
    CHARTCertificationPage,

    CHARTOverviewFRPage,
    CHARTQsrRestaurantFRPage,
    CHARTRecreationFRPage,
    CHARTCasualFRPage,
    CHARTCafeteriaBreakfastFRPage,
    CHARTCafeteriaLunchFRPage,
    CHARTCertificationFRPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'overlay',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    OverviewPage,
    QsrRestaurantPage,
    RecreationPage,
    CasualPage,
    CafeteriaBreakfastPage,
    CafeteriaLunchPage,
    CalculatorPage,

    HelloIonicFRPage,
    OverviewFRPage,
    QsrRestaurantFRPage,
    RecreationFRPage,
    CasualFRPage,
    CafeteriaBreakfastFRPage,
    CafeteriaLunchFRPage,
    CalculatorFRPage,

    CHARTOverviewPage,
    CHARTQsrRestaurantPage,
    CHARTRecreationPage,
    CHARTCasualPage,
    CHARTCafeteriaBreakfastPage,
    CHARTCafeteriaLunchPage,
    CHARTCertificationPage,

    CHARTOverviewFRPage,
    CHARTQsrRestaurantFRPage,
    CHARTRecreationFRPage,
    CHARTCasualFRPage,
    CHARTCafeteriaBreakfastFRPage,
    CHARTCafeteriaLunchFRPage,
    CHARTCertificationFRPage

  ],
  providers: [
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}


