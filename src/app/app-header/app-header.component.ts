import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit{

  selectedCurrency = '';
  selectedLanguage = '';

  currencyArr: Currency[] = [
    {value: 'USD', text: 'USD'},
    {value: 'CAD', text: 'CAD'},
    {value: 'EUR', text: 'EUR'}
  ];

  languageArr = [
    {value:'English', text:'USA (English)'},
    {value:'Espanol', text:'Espanol'}
  ]



  ngOnInit(): void {
    this.selectedCurrency = this.currencyArr[0].value;
    this.selectedLanguage = this.languageArr[0].value;
  }


}
