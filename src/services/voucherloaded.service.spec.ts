import { TestBed } from '@angular/core/testing';

import { VoucherloadedService } from './voucherloaded.service';

describe('VoucherloadedService', () => {
  let service: VoucherloadedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherloadedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
