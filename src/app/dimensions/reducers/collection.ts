import * as collection from '../actions/collection';
import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Dimension } from '../models/dimension';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: number[];
}

export const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(
  state: State = initialState,
  action: collection.Actions
): State {
  switch (action.type) {
    case collection.LOAD: {
      return {
        ...state,
        loading: true
      };
    }
    case collection.LOAD_SUCCESS: {
      return {
        loaded: true,
        loading: false,
        ids: action.payload.map(dimension => dimension.id)
      };
    }
    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
