import { TestBed } from '@angular/core/testing';

import { BackConnService } from './back-conn.service';

describe('BackConnService', () => {
  let service: BackConnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackConnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
