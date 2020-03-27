import { TestBed } from '@angular/core/testing';

import { BreifViewService } from './breif-view.service';

describe('BreifViewService', () => {
  let service: BreifViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreifViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
