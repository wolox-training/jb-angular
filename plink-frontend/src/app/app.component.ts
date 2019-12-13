import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Plink Frontend';
  isActive = 2;
  sendingCurrencyConvert: string;
  prices: Currency[] = [];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this.currencyService.getPrice().subscribe(({ prices }: any) => {
      this.prices = prices;
    });
  }

  getTab(data) {
    this.isActive = data.id;
    this.sendingCurrencyConvert = data.coin;
  }
}
