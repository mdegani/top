import { Action } from '@ngrx/store';

import { Dimension } from '../models/dimension';

export const LOAD = '[Dimensions] Load';
export const LOAD_SUCCESS = '[Dimensions] Load Success';
export const LOAD_FAIL = '[Dimensions] Load Fail';

export class Load implements Action {
  public readonly type = LOAD;
}

export class LoadSuccess implements Action {
  public readonly type = LOAD_SUCCESS;
  constructor(public payload: Dimension[]) {}
}

export class LoadFail implements Action {
  public readonly type = LOAD_FAIL;
  constructor(public payload: any) {}
}

export type Actions = Load | LoadSuccess | LoadFail;
