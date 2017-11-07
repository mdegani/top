import { Action } from '@ngrx/store';

import { Person } from '../models/person';

export const LOAD = '[People] Load';
export const LOAD_SUCCESS = '[People] Load Success';
export const LOAD_FAIL = '[People] Load Fail';

export class Load implements Action {
  public readonly type = LOAD;
}

export class LoadSuccess implements Action {
  public readonly type = LOAD_SUCCESS;
  constructor(public payload: Person[]) {}
}

export class LoadFail implements Action {
  public readonly type = LOAD_FAIL;
  constructor(public payload: any) {}
}

export type Actions = Load | LoadSuccess | LoadFail;
