import { TestBed } from '@angular/core/testing';

import { ServicioDirectoresService } from './servicio-directores.service';

describe('ServicioDirectoresService', () => {
  let service: ServicioDirectoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDirectoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
