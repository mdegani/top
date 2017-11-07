import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
// import { RouterStateUrl } from '../shared/utils';
import { storeLogger } from 'ngrx-store-logger';
import * as fromRouter from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

// tslint:disable-next-line:no-empty-interface
export interface State {
  // routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
};


export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
