export enum DimTypes {
  Employee = 'person',
  Position = 'position',
  Job = 'job',
  Type = 'type',
  Location = 'office',
  Status = 'status',
  ExemptStatus = 'exemptStatus',
}

export interface Dimension {
  id: number;
  dimType: DimTypes;
  name: string;
}

export interface Employee {
  kind: DimTypes.Employee;
  id: number;
  name: string;
}

export interface Position {
  kind: DimTypes.Position;
  id: number;
  name: string;
}

export interface Job {
  kind: DimTypes.Job;
  id: number;
  name: string;
}

export interface Type {
  kind: DimTypes.Type;
  id: number;
  name: string;
}

export interface Location {
  kind: DimTypes.Location;
  id: number;
  name: string;
}

export interface Status {
  kind: DimTypes.Status;
  id: number;
  name: string;
}

export interface ExemptStatus {
  kind: DimTypes.ExemptStatus;
  id: number;
  name: string;
}
