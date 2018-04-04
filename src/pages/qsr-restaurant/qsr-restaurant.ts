import { Component } from '@angular/core';



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
