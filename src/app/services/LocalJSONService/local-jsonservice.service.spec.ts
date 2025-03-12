import { TestBed } from '@angular/core/testing';

import { LocalJSONService } from './local-jsonservice.service';

describe('LocalJSONServiceService', () => {
  let service: LocalJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
