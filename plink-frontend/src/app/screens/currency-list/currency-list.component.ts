import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit, OnChanges {

  @Input() prices: Currency;
  @Output() activeTab: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  redirectConvert(coin) {
    this.activeTab.emit({ id: 1, coin: coin });
  }
}
