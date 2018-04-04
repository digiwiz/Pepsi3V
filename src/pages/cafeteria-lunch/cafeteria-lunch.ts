import { Component } from '@angular/core';


@Component({
  templateUrl: 'cafeteria-lunch.html'
})

export class CafeteriaLunchPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "beveragecooler";
  public type = "variety";
  public key = "lunch";

}
