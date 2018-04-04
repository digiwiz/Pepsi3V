import { Component } from '@angular/core';



@Component({
  templateUrl: 'recreation.html'
})

export class RecreationPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "beveragevendor";
  public type = "variety";

}
