import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  prices: Currency[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this.currencyService.getPrice().subscribe(({ prices }: any) => {
      this.prices = prices;
    })
  }
}
