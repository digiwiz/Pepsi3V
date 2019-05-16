import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'page-chart-certification',
  templateUrl: 'chart-certification.html'
})

export class CHARTCertificationPage {

  message ='';
  totalScore = 0;
  public survey: FormGroup;


  constructor(  private formBuilder: FormBuilder,
                public navCtrl: NavController,
                private emailComposer: EmailComposer) {

      this.survey = this.formBuilder.group({
        fsr       : ['', Validators.required],
        location  : ['', Validators.required],
        question1 : [null, Validators.required],
        question2 : [null, Validators.required],
        question3 : [null, Validators.required],
        question4 : [null, Validators.required],
        question5 : [null, Validators.required],
        question6 : [null, Validators.required],
        question7 : [null, Validators.required],
        question8 : [null, Validators.required],
        body      : [''],
        score     : [null]
    });
  }


  logForm(){
    console.log(this.survey.value)
  }

  slide="out";

findScore() {
  this.totalScore = 0;
  if (this.survey.controls['question1'].value  == 'YES' ) {this.totalScore++ ;}
  if (this.survey.controls['question2'].value  == 'YES' ) {this.totalScore++ ;}
  if (this.survey.controls['question3'].value  == 'YES' ) {this.totalScore++ ;}
  if (this.survey.controls['question4'].value  == 'YES' ) {this.totalScore++ ;}
  if (this.survey.controls['question5'].value  == 'YES' ) {this.totalScore++ ;}
  if (this.survey.controls['question6'].value  == 'YES' ) {this.totalScore++ ;}
  if (this.survey.controls['question7'].value  == 'YES' ) {this.totalScore++ ;}
  if (this.survey.controls['question8'].value  == 'YES' ) {this.totalScore++ ;}
  this.totalScore = (this.totalScore /8 ) *100;
  this.totalScore.toFixed(0);
}


  sendEmail() {

    this.message =  '<h4>FSR:</h4>' + this.survey.controls['fsr'].value + '<br>' +
                    '<h4>Location Name:</h4>' + this.survey.controls['location'].value + '<br><br>' +
                    '<h4>Score: ' +  this.totalScore +'%</h4>' + '<br><br>' +
                    '<h4>User Comments: </h4>' + this.survey.controls['body'].value + '<br><br>' +
                    '<h4>CHART</h4>' +
                    'Q1: Do you have all <strong>core</strong> neverouts?' + '<br>' + this.survey.controls['question1'].value + '<br><br>' +
                    'Q2: Have you activated the <strong>healthy</strong> portfolio?' + '<br>' + this.survey.controls['question2'].value + '<br><br>' +
                    'Q3: Is innovation being <strong>accelerated</strong> with incremental space or POS' + '<br>' + this.survey.controls['question3'].value + '<br><br>' +
                    'Q4: Have you offered additional products/merchandising to meet the needs<br>of this specific customer to ensure we are offering what is <strong>right</strong> for the account?' + '<br>' + this.survey.controls['question4'].value + '<br><br>' +
                    'Q5: Have you activated against opportunities to <strong>trade</strong> up?' + '<br>' + this.survey.controls['question5'].value + '<br><br>' +
                    '<h4>FUNDAMENTALS</h4>' + '<br><br>' +
                    'Q6: Were PEPSICO POS and merchandising tools effectively used?' + '<br>' + this.survey.controls['question6'].value + '<br><br>' +
                    'Q7: Were price points clearly visible on all PEPSICO products?' + '<br>' + this.survey.controls['question7'].value + '<br><br>' +
                    'Q8: Were POS elements in good condition and current?' + '<br>' + this.survey.controls['question7'].value;

    console.log(this.message);

    let email: any = {
              to          : '',
              cc          : '',
              subject     : 'CHART Certification',
              body        : this.message,
              isHtml      : true
    };
    this.emailComposer.open(email);
  }

}

