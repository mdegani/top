import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Dimension } from '../models/dimension';
import { DimensionsService } from '../../services/dimensions.service';
import * as collection from '../actions/collection';

@Injectable()
export class CollectionEffects {
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .switchMap(() => {
      return this.dimensionsService
        .getDimensions()
        .map((dimensions: Dimension[]) => new collection.LoadSuccess(dimensions))
        .catch(error => of(new collection.LoadFail(error)));
    });

  constructor(
    private actions$: Actions,
    private dimensionsService: DimensionsService
  ) {}
}
