import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  prices: any;

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this.currencyService.getPrice().subscribe((data: any) => {
      console.log('jabh', data.prices)
      this.prices = data.prices;
    })
  }
}
