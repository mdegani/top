import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get('app/people');
  }

  addPerson() {
    return this.http.post('app/people', {name: 'new person'});
  }
}

