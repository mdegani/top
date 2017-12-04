import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { EmployeeTransactions } from '../models/employee-transactions';
import { TransactionService } from '../../services/transaction.service';
import * as employeeTransactions from '../actions/employee-transactions';

@Injectable()
export class TransactionEffects {
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(employeeTransactions.LOAD)
    .switchMap(() => {
      return this.dimensionsService
        .getDimensions()
        .map(
          (dimensions: EmployeeTransactions[]) =>
            new employeeTransactions.LoadSuccess(dimensions),
        )
        .catch(error => of(new employeeTransactions.LoadFail(error)));
    });

  constructor(
    private actions$: Actions,
    private dimensionsService: TransactionService,
  ) {}
}
