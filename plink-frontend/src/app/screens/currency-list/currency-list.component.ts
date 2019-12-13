import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit, OnChanges {

  @Input() prices: Currency;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
