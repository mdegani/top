import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TransactionService {
  constructor(private http: HttpClient) {}

  getDimensions() {
    const baseUrl = environment.APIURI;
    return this.http.get(`${baseUrl}/transactions`);
  }

}

