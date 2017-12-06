export enum DimTypes {
  Employee = 'Person',
  Position = 'Position',
  Job = 'Job',
  PayRate = 'Pay Rate',
  Currency = 'Currency',
  Level = 'Level',
  Location = 'Office',
  Status = 'Status',
  ExemptStatus = 'Exempt Status',
}

export interface Dimension {
  id: number;
  dimType: DimTypes;
  name: string;
}

// a person
export class Employee {
  kind: DimTypes.Employee;
  constructor(public id: number, public name: string) {}
}

export class Position {
  kind: DimTypes.Position;
  constructor(public id: number, public name: string) {}
}

// the nature of the work being done
export class Job {
  kind: DimTypes.Job;
  constructor(public id: number, public name: string) {}
}

// the level of the work along with the career path type (pro, mgmt, admin)
export class Level {
  kind: DimTypes.Level;
  constructor(public id: number, public name: string) {}
}

// the base office location for the employee
export class Location {
  kind: DimTypes.Location;
  constructor(public id: number, public name: string) {}
}

// employement status... active, leave, full time, part time, could mean anything
export class Status {
  kind: DimTypes.Status;
  constructor(public id: number, public name: string) {}
}

// flsa exemption status (or equivalent): whether the employee is entitled to OT
export class ExemptStatus {
  kind: DimTypes.ExemptStatus;
  constructor(public id: number, public name: string) {}
}

// the rate of pay for salary admin (annual or hourly)
export class PayRate {
  kind: DimTypes.PayRate;
  constructor(public id: number, public name: string) {}
}

// the currency for an employee's compensation (should match Location)
export class Currency {
  kind: DimTypes.Currency;
  constructor(public id: number, public name: string) {}
}
