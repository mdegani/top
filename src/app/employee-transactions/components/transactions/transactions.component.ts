import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeTransactions } from '../../models/index';
import * as transactions from '../../actions/employee-transactions';
import * as fromTransactions from '../../reducers';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions = this.store.select(fromTransactions.getAllTransactions);

  constructor(
    private store: Store<EmployeeTransactions>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new transactions.Load());
  }

}
