import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient
  ) { }

  getPrice() {
    return this.http.get(`${environment.ROOT_URL}/prices?coin=btc`, {
      headers:
      {
        'x-rapidapi-host': environment.RAPID_API_HOST,
        'x-rapidapi-key': environment.RAPID_API_KEY
      }
    });
  }
}
