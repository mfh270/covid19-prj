import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-test',
  templateUrl: './self-test.component.html',
  styleUrls: ['./self-test.component.css'],
})
export class SelfTestComponent implements OnInit {
  constructor() {}

  result;
   result1 = '';
   result2 = '';
   result3 = '';
   result4 = '';
   selected1 = [];
   selected2 = [];
   selected3 = [];
   selected4 = [];

   pollution = [
     { checked: false, name: 'Dry Cough', value: 'pollution' },
     { checked: false, name: 'Sneeze', value: 'pollution' },
   ];
   cold = [
     { checked: false, name: 'Cough', value: 'cold' },
     { checked: false, name: 'Mucus', value: 'cold' },
     { checked: false, name: 'Sneeze', value: 'cold' },
     { checked: false, name: 'Runny nose', value: 'cold' },
   ];
   flu = [
     { checked: false, name: 'Cough', value: 'flu' },
     { checked: false, name: 'Mucus', value: 'flu' },
     { checked: false, name: 'Sneeze', value: 'flu' },
     { checked: false, name: 'Runny nose', value: 'flu' },
     { checked: false, name: 'Body ache', value: 'flu' },
     { checked: false, name: 'Weakness', value: 'flu' },
     { checked: false, name: 'Light fever', value: 'flu' },
   ];
   corona = [
     { checked: false, name: 'Dry cough', value: 'corona' },
     { checked: false, name: 'Sneeze', value: 'corona' },
     { checked: false, name: 'Body pain', value: 'corona' },
     { checked: false, name: 'Weakness', value: 'corona' },
     { checked: false, name: 'High fever', value: 'corona' },
     { checked: false, name: 'Difficulty breathing', value: 'corona' },
   ];

   diseases = [
     'Dry Cough',
     'Sneeze',
     'Cough',
     'Mucus',
     'Runny Nose',
     'Body Ache',
     'Weakness',
     'Light Fever',
     'Body Pain',
     'High Fever',
     'Difficulty Breathing',
   ];

   ngOnInit(): void {}

   check() {
     var r1 = this.pollution.filter((opt) => opt.checked).map((opt) => opt);
     this.selected1 = r1;

     var r2 = this.cold.filter((opt) => opt.checked).map((opt) => opt);
     this.selected2 = r2;

     var r3 = this.flu.filter((opt) => opt.checked).map((opt) => opt);
     this.selected3 = r3;

     var r4 = this.corona.filter((opt) => opt.checked).map((opt) => opt);
     this.selected4 = r4;

     if (JSON.stringify(this.selected1) === JSON.stringify(this.pollution)) {
       this.result1 = '= Air Pollution';
     }

     if (JSON.stringify(this.selected2) === JSON.stringify(this.cold)) {
       this.result2 = '= Common Cold';
     }

     if (JSON.stringify(this.selected3) === JSON.stringify(this.flu)) {
       this.result3 = '= Flu';
     }

     if (JSON.stringify(this.selected4) === JSON.stringify(this.corona)) {
       this.result4 = '= Coronavirus';
     }
   }

   checkedValue = '';
   onChange(chk) {
     this.result1 = '';
     this.result2 = '';
     this.result3 = '';
     this.result4 = '';
     this.checkedValue = chk.value;
     for (let p of this.pollution) {
       if (p.value == this.checkedValue) {
         this.cold = this.cold.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.flu = this.flu.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.corona = this.corona.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
       }
     }
     for (let f of this.flu) {
       if (f.value == this.checkedValue) {
         this.cold = this.cold.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.pollution = this.pollution.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.corona = this.corona.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
       }
     }
     for (let c of this.cold) {
       if (c.value == this.checkedValue) {
         this.flu = this.flu.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.pollution = this.pollution.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.corona = this.corona.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
       }
     }
     for (let cr of this.corona) {
       if (cr.value == this.checkedValue) {
         this.flu = this.flu.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.pollution = this.pollution.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
         this.cold = this.cold.map((obj) => {
           if (obj.checked === true) {
             obj.checked = false;
           }
           return obj;
         });
       }
     }
   }

}
