import {
  Employee,
  Position,
  Job,
  Level,
  Location,
  Status,
  ExemptStatus,
  Currency,
  PayRate,
} from '../../dimensions/models';

export interface EmployeeTransactions {
  id: number;
  startDate: Date;
  employee: Employee;
  position: Position;
  managerPosition: Position;
  firstName: string;
  lastName: string;
  currency: Currency;
  payRate: PayRate;
  job: Job;
  level: Level;
  bonusTarget: number;
  bonusElig: boolean;
  location: Location;
  status: Status;
  exemptStatus: ExemptStatus;
}

export interface EmployeeTransactionsResponse {
  id: number;
  startDate: Date;
  Employee: number;
  position: number;
  managerPosition: number;
  firstName: string;
  lastName: string;
  currency: number;
  payRate: number;
  job: number;
  level: number;
  bonusTarget: number;
  bonusElig: boolean;
  location: number;
  status: number;
  exemptStatus: number;
}
