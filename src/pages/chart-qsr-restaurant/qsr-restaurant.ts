import { Component } from '@angular/core';

@Component({
  templateUrl: 'qsr-restaurant.html'
})

export class CHARTQsrRestaurantPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "core-food";
  public type = "c";

}
