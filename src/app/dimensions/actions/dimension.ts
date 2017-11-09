import { Action } from '@ngrx/store';

import { Dimension } from '../models/dimension';

export const LOAD = '[Dimension] Load';
export const SELECT = '[Dimension] Select';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: Dimension) {}
}

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {}
}

export type Actions = Load | Select;
