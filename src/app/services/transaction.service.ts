import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// TODO: I'm not using barrels... 🤗. I should:
import { TransactionDataSource } from '../employee-transactions/components/transactions/transactions.component';
import { EmployeeTransactionsResponse } from '../employee-transactions/models/employee-transactions';
import { Dimension } from '../dimensions/models/dimension';
import { EmployeeTransactions } from '../employee-transactions/models/index';
import {
  PayRate,
  Job,
  Currency,
  Position,
  Employee,
  Level,
  Status,
  Location,
  ExemptStatus,
  DimTypes,
} from '../dimensions/models/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TransactionService {
  private getName(dim: Dimension[], idx: number): string {
    const foundDim = dim.find(d => d.id === idx);
    return foundDim ? foundDim.name : 'not found, bad index!';
  }

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<EmployeeTransactions[]> {
    const baseUrl = environment.APIURI;
    return this.http
      .get(`${baseUrl}/dimensions`)
      .switchMap((dim: Dimension[]) => {
        return this.http
          .get(`${baseUrl}/transactions`)
          .map((trans: EmployeeTransactionsResponse[]) =>
            trans.map((tran: EmployeeTransactionsResponse) => {
              return {
                id: tran.id,
                startDate: tran.startDate,
                employee: new Employee(tran.id, this.getName(dim, tran.Employee)),
                position: new Position(tran.id, this.getName(dim, tran.position)),
                managerPosition: new Position(tran.id, this.getName(dim, tran.managerPosition)),
                firstName: tran.firstName,
                lastName: tran.lastName,
                currency: new Currency(tran.id, this.getName(dim, tran.currency)),
                payRate: new PayRate(tran.id, this.getName(dim, tran.payRate)),
                job: new Job(tran.id, this.getName(dim, tran.job)),
                level: new Level(tran.id, this.getName(dim, tran.level)),
                bonusTarget: tran.bonusTarget,
                bonusElig: tran.bonusElig,
                location: new Location(tran.id, this.getName(dim, tran.location)),
                status: new Status(tran.id, this.getName(dim, tran.status)),
                exemptStatus: new ExemptStatus(tran.id, this.getName(dim, tran.exemptStatus)),
              };
            }),
          );
      });
  }
}
