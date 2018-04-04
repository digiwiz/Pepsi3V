import { Component } from '@angular/core';



@Component({
  templateUrl: 'recreation-FR.html'
})

export class RecreationFRPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "beveragevendor";
  public type = "variety";

}
