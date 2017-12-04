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
export interface Employee {
  kind: DimTypes.Employee;
  id: number;
  name: string;
}

// a budgeted position in the organization
export interface Position {
  kind: DimTypes.Position;
  id: number;
  name: string;
}

// the nature of the work being done
export interface Job {
  kind: DimTypes.Job;
  id: number;
  name: string;
}

// the level of the work along with the career path type (pro, mgmt, admin)
export interface Level {
  kind: DimTypes.Level;
  id: number;
  name: string;
}

// the base office location for the employee
export interface Location {
  kind: DimTypes.Location;
  id: number;
  name: string;
}

// employement status... active, leave, full time, part time, could mean anything
export interface Status {
  kind: DimTypes.Status;
  id: number;
  name: string;
}

// flsa exemption status (or equivalent): whether the employee is entitled to OT
export interface ExemptStatus {
  kind: DimTypes.ExemptStatus;
  id: number;
  name: string;
}

// the rate of pay for salary admin (annual or hourly)
export interface PayRate {
  kind: DimTypes.PayRate;
  id: number;
  name: string;
}

// the currency for an employee's compensation (should match Location)
export interface Currency {
  kind: DimTypes.Currency;
  id: number;
  name: string;
}
