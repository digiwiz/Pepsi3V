import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  templateUrl: 'qsr-restaurant.html'
})

export class QsrRestaurantPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "fountain";
  public type = "variety";

}
