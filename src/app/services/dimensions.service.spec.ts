import { TestBed, inject } from '@angular/core/testing';

import { DimensionsService } from './dimensions.service';

describe('DimensionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DimensionsService]
    });
  });

  it('should be created', inject([DimensionsService], (service: DimensionsService) => {
    expect(service).toBeTruthy();
  }));
});
