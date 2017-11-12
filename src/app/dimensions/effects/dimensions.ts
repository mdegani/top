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
import * as dimension from '../actions/dimension';

@Injectable()
export class DimensionEffects {
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(dimension.LOAD)
    .switchMap(() => {
      return this.dimensionsService
        .getDimensions()
        .map((dimensions: Dimension[]) => new dimension.LoadSuccess(dimensions))
        .catch(error => of(new dimension.LoadFail(error)));
    });

  constructor(
    private actions$: Actions,
    private dimensionsService: DimensionsService
  ) {}
}
