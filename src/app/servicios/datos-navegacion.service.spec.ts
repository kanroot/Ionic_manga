import { TestBed } from '@angular/core/testing';

import { DatosNavegacionService } from './datos-navegacion.service';

describe('DatosNavegacionService', () => {
  let service: DatosNavegacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosNavegacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
