import { Component } from '@angular/core';
import { DimensionsService } from './services/dimensions.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import {Employee, Level, DimTypes} from './dimensions/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: Employee;

  constructor(private dimensionsService: DimensionsService) {
    this.employee = {
      kind: DimTypes.Employee,
      id: 1,
      name: 'what'
    };

  }

  navLinks = [
    { path: 'dimensions', label: 'Dimensions' },
    { path: 'transactions', label: 'Transactions' },
    { path: 'about', label: 'About' },
  ];
}
