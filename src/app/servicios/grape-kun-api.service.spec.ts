import { TestBed } from '@angular/core/testing';

import { GrapeKunApiService } from './grape-kun-api.service';

describe('GrapeKunApiService', () => {
  let service: GrapeKunApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrapeKunApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
