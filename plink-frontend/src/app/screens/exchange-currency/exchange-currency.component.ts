import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-exchange-currency',
  templateUrl: './exchange-currency.component.html',
  styleUrls: ['./exchange-currency.component.scss']
})
export class ExchangeCurrencyComponent implements OnInit, OnChanges {

  @Input() prices: Currency;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('exchange component', this.prices);
  }

}
