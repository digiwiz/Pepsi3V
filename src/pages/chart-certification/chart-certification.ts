import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'page-chart-certification',
  templateUrl: 'chart-certification.html'
})
export class CHARTCertificationPage {


  survey = {}

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, private emailComposer: EmailComposer) {
    this.survey = this.formBuilder.group({
      body: ["", Validators.required],
      unitspercase: [null, Validators.required],
      unitretailcase: [null, Validators.required],
      unitvolume: [null, Validators.required],
      profit: [0, Validators.required],
      loss: [0, Validators.required]
    });
  }


  logForm(){
    console.log(this.survey)
  }

  slide="out";

  sendEmail(body       : string) : void

    {

    let email: any = {
              to          : 'dterenzio@gmail.com',
              cc          : 'dterenzio@gmail.com',
              subject     : 'cool image',
              body        : body,
              isHtml      : true
    };
    this.emailComposer.open(email);
  }

}

