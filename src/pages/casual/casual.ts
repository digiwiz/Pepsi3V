import { Component } from '@angular/core';



@Component({
  templateUrl: 'casual.html'
})

export class CasualPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public beveragecooler = true;
  public view = "menu";
  public type = "variety";

}
