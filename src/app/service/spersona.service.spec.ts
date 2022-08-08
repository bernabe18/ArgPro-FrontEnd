import { TestBed } from '@angular/core/testing';

import { SpersonaService } from './spersona.service';

describe('SpersonaService', () => {
  let service: SpersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
