import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DimensionsService {
  constructor(private http: HttpClient) {}

  getDimensions() {
    return this.http.get('app/dimensions');
  }

  // addDimension() {
  //   return this.http.post('app/dimensions', {name: 'new dimension'});
  // }
}

