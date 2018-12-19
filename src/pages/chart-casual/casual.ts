import { Component } from '@angular/core';



@Component({
  templateUrl: 'casual.html'
})

export class CHARTCasualPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "core-food";
  public type = "c";

}
