import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DimensionsService {
  constructor(private http: HttpClient) {}

  getDimensions() {
    const baseUrl = environment.APIURI;
    return this.http.get(`${baseUrl}/dimensions`);
  }

  // addDimension() {
  //   return this.http.post('app/dimensions', {name: 'new dimension'});
  // }
}

