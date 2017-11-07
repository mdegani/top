import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Person } from '../models/person';
import * as personActions from '../actions/person';
import * as collectionAction from '../actions/collection';

export interface State extends EntityState<Person> {
  selectedPersonId: number | null;
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (person: Person) => person.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedPersonId: null
});

export function reducer(
  state = initialState,
  action: personActions.Actions | collectionAction.Actions
): State {
  switch (action.type) {
    case collectionAction.LOAD_SUCCESS: {
      return {
        ...adapter.addMany(action.payload, state),
        selectedPersonId: state.selectedPersonId
      };
    }

    case personActions.LOAD: {
      return {
        ...adapter.addOne(action.payload, state),
        selectedPersonId: state.selectedPersonId
      };
    }

    case personActions.SELECT: {
      return {
        ...state,
        selectedPersonId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedPersonId;
