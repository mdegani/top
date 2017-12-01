import {
  Employee,
  Position,
  Job,
  Type,
  Location,
  Status,
  ExemptStatus,
} from '../../dimensions/models';

export interface EmployeeTransactions {
  startDate: Date;
  employee: Employee;
  position: Position;
  managerPosition: Position;
  firstName: string;
  lastName: string;
  currency: number;
  payRate: string;
  job: Job;
  type: Type;
  bonusTarget: number;
  bonusElig: boolean;
  location: Location;
  status: Status;
  exemptStatus: ExemptStatus;
}
