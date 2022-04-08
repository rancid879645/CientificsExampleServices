import { TestBed } from '@angular/core/testing';

import { CientificsServiceService } from './cientifics-service.service';

describe('CientificsServiceService', () => {
  let service: CientificsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CientificsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
