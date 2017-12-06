import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { EmployeeTransactions } from '../models';
import { Employee, Position } from '../../dimensions/models';
import * as employeeTransactionActions from '../actions/employee-transactions';

export interface State extends EntityState<EmployeeTransactions> {
  // TODO rename to singular
  selectedTransaction: number;
}

export const adapter: EntityAdapter<EmployeeTransactions> = createEntityAdapter<
  EmployeeTransactions
>();

export const initialState: State = adapter.getInitialState({
  selectedTransaction: null,
});

export function reducer(
  state = initialState,
  action: employeeTransactionActions.Actions,
): State {
  switch (action.type) {
    case employeeTransactionActions.LOAD_SUCCESS: {
      return {
        ...adapter.addMany(action.payload, state),
      };
    }

    case employeeTransactionActions.LOAD: {
      return {
        ...state,
      };
    }

    case employeeTransactionActions.SELECT: {
      return {
        ...state,
        selectedTransaction: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedTransaction = (state: State) => state.selectedTransaction;
