import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Plink Frontend';
  pricess: any;

  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this.currencyService.getPrice().subscribe((data: any) => {
      console.log(data)
      this.pricess = data.prices;
    })
  }

}
