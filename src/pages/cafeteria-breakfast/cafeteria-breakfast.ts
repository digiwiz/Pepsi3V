import { Component } from '@angular/core';



@Component({
  templateUrl: 'cafeteria-breakfast.html'
})

export class CafeteriaBreakfastPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "quakermuffinrack";
  public type = "variety";

}
