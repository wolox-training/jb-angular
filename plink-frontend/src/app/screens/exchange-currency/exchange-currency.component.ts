import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Input() assignCurrency: string;
  exchangeForm: FormGroup;

  constructor(private currencyService: CurrencyService) {
    this.exchangeForm = new FormGroup({
      amount: new FormControl(0, [Validators.required]),
      from: new FormControl('BTC'),
      to: new FormControl('USD'),
      quantity: new FormControl(),
    });
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
    this.exchangeForm.patchValue({ from: !this.assignCurrency ? 'BTC' : this.assignCurrency });
  }

  convertCurrency() {
    this.currencyService.getConvert(this.exchangeForm.value).subscribe(({ to_quantity }: any) => {
      this.exchangeForm.patchValue({ quantity: to_quantity });
    })
  }

  changeSelect() {
    const { from: to, to: from } = this.exchangeForm.value;
    this.exchangeForm.patchValue({ to, from });
    this.convertCurrency();
  }
}
