import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { Dimension } from '../models/dimension';

export class InMemDimensionsService implements InMemoryDbService {
  createDb() {
    const dimensions: Dimension[] = [
      { id: 1, dimType: 'person', name: 'William Puls' },
      { id: 2, dimType: 'person', name: 'Betty Santana' },
      { id: 3, dimType: 'person', name: 'Cedric Flores' },
      { id: 4, dimType: 'person', name: 'Rachel Harris' },
      { id: 5, dimType: 'position', name: 'CEO' },
      { id: 6, dimType: 'position', name: 'CTO' },
      { id: 7, dimType: 'office', name: 'Queen St. Toronto, ON, Canada' },
      { id: 8, dimType: 'office', name: 'Mulberry St. New York, NY, USA' },

    ];
    return { dimensions };
  }
}
