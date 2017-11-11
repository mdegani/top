import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Dimension } from '../models/dimension';
import * as dimensionActions from '../actions/dimension';
import * as collectionAction from '../actions/collection';

export interface State extends EntityState<Dimension> {
  selectedDimensionId: number | null;
}

export const adapter: EntityAdapter<Dimension> = createEntityAdapter<Dimension>({
  selectId: (dimension: Dimension) => dimension.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedDimensionId: null
});

export function reducer(
  state = initialState,
  action: dimensionActions.Actions | collectionAction.Actions
): State {
  switch (action.type) {
    case collectionAction.LOAD_SUCCESS: {
      return {
        ...adapter.addMany(action.payload, state),
        selectedDimensionId: state.selectedDimensionId
      };
    }

    case dimensionActions.LOAD: {
      return {
        ...adapter.addOne(action.payload, state),
        selectedDimensionId: state.selectedDimensionId
      };
    }

    case dimensionActions.SELECT: {
      return {
        ...state,
        selectedDimensionId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedDimensionId;
