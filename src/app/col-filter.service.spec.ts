import { TestBed } from '@angular/core/testing';

import { ColFilterService } from './col-filter.service';

describe('ColFilterService', () => {
  let service: ColFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
