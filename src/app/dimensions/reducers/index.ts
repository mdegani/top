import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';
import * as fromDimensions from './dimensions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface DimensionsState {
  collection: fromCollection.State;
  dimensions: fromDimensions.State;
}

export interface State extends fromRoot.State {
  'dimensions': DimensionsState;
}

export const reducers = {
  collection: fromCollection.reducer,
  dimensions: fromDimensions.reducer
};

export const getDimensionsState = createFeatureSelector<DimensionsState>('dimensions');

export const getCollectionState = createSelector(
  getDimensionsState,
  state => state.collection
);

export const getDimensionEntitiesState = createSelector(
  getDimensionsState,
  state => state.dimensions
);

export const {
  selectIds: getDimensionIds,
  selectEntities: getDimensionEntities,
  selectAll: getAllDimensions,
  selectTotal: getTotalDimensions
} = fromDimensions.adapter.getSelectors(getDimensionEntitiesState);


export const getCollectionDimensionIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

export const getDimensionCollection = createSelector(
  getDimensionEntities,
  getCollectionDimensionIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);
