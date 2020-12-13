import { TestBed } from '@angular/core/testing';

import { StorieService } from './storie.service';

describe('StorieService', () => {
  let service: StorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
