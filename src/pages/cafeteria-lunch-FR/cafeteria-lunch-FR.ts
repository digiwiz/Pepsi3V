import { Component } from '@angular/core';


@Component({
  templateUrl: 'cafeteria-lunch-FR.html'
})

export class CafeteriaLunchFRPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "variety04";
  public type = "variety";
  public key = "lunch";

}
