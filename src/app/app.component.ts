import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private peopleService: PeopleService) {}

  getPeopleClick$: BehaviorSubject<{}> = new BehaviorSubject<{}>(null);
  people$ = this.getPeopleClick$.switchMap(() => {
    return this.peopleService.getPeople();
  });
  navLinks = [{ path: 'people', label: 'People' }, { path: 'about', label: 'About' }];

  addPerson() {
    this.peopleService.addPerson();
  }

  onClick() {
    this.getPeopleClick$.next(null);
  }
}
