import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeTransactions } from '../../models/index';
import * as transactions from '../../actions/employee-transactions';
import * as fromTransactions from '../../reducers';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  dataSource: TransactionDataSource | null;
  displayedColumns = ['id', 'startDate', 'employee', 'position', 'job', ];
  fullTransactions = this.store.select(fromTransactions.getAllTransactions);

  constructor(private store: Store<EmployeeTransactions>) {}

  ngOnInit() {
    this.dataSource = new TransactionDataSource(this.store);
  }
}

export class TransactionDataSource extends DataSource<any> {
  constructor(private store: Store<EmployeeTransactions>) {
    super();
  }
  connect(): Observable<EmployeeTransactions[]> {
    this.store.dispatch(new transactions.Load());

    return this.store.select(fromTransactions.getAllTransactions);
  }
  disconnect() {}
}
