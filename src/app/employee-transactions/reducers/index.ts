import * as fromRoot from '../../reducers';
import * as fromEmployeeTransactions from './employee-transaction';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeeTransactions } from '../models/employee-transactions';

export interface TransactionState {
  transactions: fromEmployeeTransactions.State;
}

export interface State extends fromRoot.State {
  transactions: TransactionState;
}

export const reducers = {
  transactions: fromEmployeeTransactions.reducer
};

export const getTransactionState = createFeatureSelector<TransactionState>(
  'transactions'
);

export const getTransactionsEntitiesState = createSelector(
  getTransactionState,
  state => state.transactions
);

export const {
  selectIds: getTransactionIds,
  selectEntities: getTransactionEntities,
  selectAll: getAllTransactions,
  selectTotal: getTotalTransactions
} = fromEmployeeTransactions.adapter.getSelectors(getTransactionsEntitiesState);

export const getSelectedTransaction = createSelector(
  getTransactionsEntitiesState,
  x => x.selectedTransaction
);

