import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from '../models/person';
import { PeopleService } from '../../services/people.service';
import * as collection from '../actions/collection';

@Injectable()
export class CollectionEffects {
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .switchMap(() => {
      return this.peopleService
        .getPeople()
        .map((persons: Person[]) => new collection.LoadSuccess(persons))
        .catch(error => of(new collection.LoadFail(error)));
    });

  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}
}
