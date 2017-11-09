import { Component } from '@angular/core';
import { DimensionsService } from './services/dimensions.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dimensionsService: DimensionsService) {}

  getDimensionsClick$: BehaviorSubject<{}> = new BehaviorSubject<{}>(null);
  dimensions$ = this.getDimensionsClick$.switchMap(() => {
    return this.dimensionsService.getDimensions();
  });
  navLinks = [{ path: 'dimensions', label: 'Dimensions' }, { path: 'about', label: 'About' }];

  addDimension() {
    this.dimensionsService.addDimension();
  }

  onClick() {
    this.getDimensionsClick$.next(null);
  }
}
