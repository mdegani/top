import { Action } from '@ngrx/store';

import { EmployeeTransactions } from '../models/employee-transactions';

export const SELECT = '[EmployeeTransactions] Select';
export const LOAD = '[EmployeeTransactionss] Load';
export const LOAD_SUCCESS = '[EmployeeTransactionss] Load Success';
export const LOAD_FAIL = '[EmployeeTransactionss] Load Fail';

export class Load implements Action {
  readonly type = LOAD;

  constructor() {}
}

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {}
}

export class LoadSuccess implements Action {
  public readonly type = LOAD_SUCCESS;
  constructor(public payload: EmployeeTransactions[]) {}
}

export class LoadFail implements Action {
  public readonly type = LOAD_FAIL;
  constructor(public payload: any) {}
}

export type Actions = Load | Select | LoadSuccess | LoadFail;
