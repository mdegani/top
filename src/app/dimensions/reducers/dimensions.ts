import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Dimension } from '../models/dimension';
import * as dimensionActions from '../actions/dimension';

export interface State extends EntityState<Dimension> {
  selectedDimensionId: number | null;
  selectedDimType: string | null;
}

export const adapter: EntityAdapter<Dimension> = createEntityAdapter<
  Dimension
>({
  selectId: (dimension: Dimension) => dimension.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedDimType: 'person',
  selectedDimensionId: null
});

export function reducer(
  state = initialState,
  action: dimensionActions.Actions
): State {
  switch (action.type) {
    case dimensionActions.LOAD_SUCCESS: {
      return {
        ...adapter.addMany(action.payload, state),
        selectedDimensionId: state.selectedDimensionId
      };
    }

    case dimensionActions.LOAD: {
      return {
        ...state
      };
    }

    case dimensionActions.SELECT: {
      return {
        ...state,
        selectedDimensionId: action.payload
      };
    }

    case dimensionActions.CHANGE_DIM_TYPE: {
      return {
        ...state,
        selectedDimType: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedDimensionId;
