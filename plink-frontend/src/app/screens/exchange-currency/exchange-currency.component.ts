import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Currency } from 'src/app/models/currency.model';
import { Convert } from 'src/app/models/convert.model';

@Component({
  selector: 'app-exchange-currency',
  templateUrl: './exchange-currency.component.html',
  styleUrls: ['./exchange-currency.component.scss']
})
export class ExchangeCurrencyComponent implements OnInit, OnChanges {

  @Input() prices: Currency[];
  convert: Convert = { value: 0, to: 'USD', from: 'BTC', quantity: 0 };

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.prices.push({
      id_currency: 'BTC',
      name: 'Bitcoin',
      price: 1,
      crypto: 1
    });
  }

  ngOnChanges() {
  }

  convertCurrency() {
    this.currencyService.getConvert(this.convert).subscribe(({ to_quantity }: any) => {
      this.convert.quantity = to_quantity;
    })
  }

  changeSelect() {
    const { to, from } = this.convert;
    const tempTo = to;
    this.convert.to = from
    this.convert.from = tempTo;
    this.convertCurrency();
  }
}
