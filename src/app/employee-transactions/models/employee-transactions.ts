import {
  Employee,
  Position,
  Job,
  Level,
  Location,
  Status,
  ExemptStatus,
  Currency,
  PayFrequency,
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
  payFreq: PayFrequency;
  payRate: number;
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
  PayFreq: number;
  payRate: number;
  job: number;
  level: number;
  bonusTarget: number;
  bonusElig: boolean;
  location: number;
  status: number;
  exemptStatus: number;
}
