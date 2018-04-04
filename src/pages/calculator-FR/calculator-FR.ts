//import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
//import { Component, trigger,state, style, transition, animate } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'calculator-FR.html'

})

export class CalculatorFRPage {

  todo = {}

  constructor(private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      casepurchaseprice: [null, Validators.required],
      unitspercase: [null, Validators.required],
      unitretailcase: [null, Validators.required],
      unitvolume: [null, Validators.required],
      profit: [0, Validators.required],
      loss: [0, Validators.required],
    });
  }


  logForm(){
    console.log(this.todo)
  }
  slide="out";



}
