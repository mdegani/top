import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

export class InMemPeopleService implements InMemoryDbService {
  createDb() {
    const people: Person[] = [
      { id: 1, name: 'William Puls' },
      { id: 2, name: 'Betty Santana' },
      { id: 3, name: 'Cedric Flores' },
      { id: 4, name: 'Rachel Harris' }
    ];
    return { people };
  }
}
