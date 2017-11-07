import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from '../models/person';
import * as collection from '../actions/collection';
import * as fromPersons from '../reducers';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people$;

  constructor(private store: Store<Person>) {
    this.people$ = this.store.select(fromPersons.getAllPersons);
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }

}
