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
  prices: Currency[] = [];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this.currencyService.getPrice().subscribe((data: any) => {
      const { prices } = data;
      this.prices = prices;
    })
  }

}
