import { TestBed } from '@angular/core/testing';

import { LCLReportService } from './lclreport.service';

describe('LCLReportService', () => {
  let service: LCLReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LCLReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
