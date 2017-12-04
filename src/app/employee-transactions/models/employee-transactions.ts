import {
  Employee,
  Position,
  Job,
  Level,
  Location,
  Status,
  ExemptStatus,
  Currency,
  PayRate
} from '../../dimensions/models';

export interface EmployeeTransactions {
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
