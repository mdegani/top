import { Action } from '@ngrx/store';

import { Dimension } from '../models/dimension';

export const SELECT = '[Dimension] Select';
export const LOAD = '[Dimensions] Load';
export const LOAD_SUCCESS = '[Dimensions] Load Success';
export const LOAD_FAIL = '[Dimensions] Load Fail';
export const CHANGE_DIM_TYPE = '[Dimensions] Change Dim Type';

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
  constructor(public payload: Dimension[]) {}
}

export class LoadFail implements Action {
  public readonly type = LOAD_FAIL;
  constructor(public payload: any) {}
}

export class ChangeSelectedDimType implements Action {
  public readonly type = CHANGE_DIM_TYPE;
  constructor(public payload: string) {}
}

export type Actions = Load | Select | LoadSuccess | LoadFail | ChangeSelectedDimType;
