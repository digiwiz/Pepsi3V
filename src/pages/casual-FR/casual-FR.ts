import { Component } from '@angular/core';



@Component({
  templateUrl: 'casual-FR.html'
})

export class CasualFRPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public beveragecooler = true;
  public view = "menu";
  public type = "variety";

}
