import * as fromRoot from '../../reducers';
import * as fromDimensions from './dimensions';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dimension } from '../models/dimension';

export interface DimensionsState {
  dimensions: fromDimensions.State;
}

export interface State extends fromRoot.State {
  dimensions: DimensionsState;
}

export const reducers = {
  dimensions: fromDimensions.reducer
};

export const getDimensionsState = createFeatureSelector<DimensionsState>(
  'dimensions'
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

export const getSelectedDimType = createSelector(
  getDimensionEntitiesState,
  x => x.selectedDimType
);

export const uniqueDimTypes = (allDims: Dimension[]) => {
  const dimTypes = new Set<string>();
  allDims.map(dim => dim.dimType).forEach(dimType => dimTypes.add(dimType));
  return Array.from(dimTypes);
};

export const getDistinctDimTypes = createSelector(getAllDimensions, uniqueDimTypes);
