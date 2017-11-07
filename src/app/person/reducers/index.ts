import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';
import * as fromPersons from './persons';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface PersonsState {
  collection: fromCollection.State;
  persons: fromPersons.State;
}

export interface State extends fromRoot.State {
  'persons': PersonsState;
}

export const reducers = {
  collection: fromCollection.reducer,
  persons: fromPersons.reducer
};

export const getPersonsState = createFeatureSelector<PersonsState>('persons');

export const getCollectionState = createSelector(
  getPersonsState,
  state => state.collection
);

export const getPersonEntitiesState = createSelector(
  getPersonsState,
  state => state.persons
);

export const {
  selectIds: getPersonIds,
  selectEntities: getPersonEntities,
  selectAll: getAllPersons,
  selectTotal: getTotalPersons
} = fromPersons.adapter.getSelectors(getPersonEntitiesState);


export const getCollectionPersonIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

export const getPersonCollection = createSelector(
  getPersonEntities,
  getCollectionPersonIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);
