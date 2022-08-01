import { TestBed } from '@angular/core/testing';

import { GeneralGuardService } from './general-guard.service';

describe('GeneralGuardService', () => {
  let service: GeneralGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
