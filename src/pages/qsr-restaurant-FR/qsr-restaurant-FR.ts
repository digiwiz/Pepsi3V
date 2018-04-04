import { Component } from '@angular/core';



@Component({
  templateUrl: 'qsr-restaurant-FR.html'
})

export class QsrRestaurantFRPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "fountain";
  public type = "variety";

}
