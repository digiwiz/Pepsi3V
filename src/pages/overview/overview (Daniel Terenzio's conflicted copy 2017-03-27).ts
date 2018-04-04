import { Component } from '@angular/core';

@Component({
  templateUrl: 'overview.html'
})

export class OverviewPage {

  mySlideOptions = {
    initialSlide: 0,
    pager: true
  };

  public view = "innovationwindow";
  public type = "value";

}
