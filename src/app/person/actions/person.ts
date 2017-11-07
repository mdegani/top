import { Action } from '@ngrx/store';

import { Person } from '../models/person';

export const LOAD = '[Person] Load';
export const SELECT = '[Person] Select';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: Person) {}
}

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {}
}

export type Actions = Load | Select;
