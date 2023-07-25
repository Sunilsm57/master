import { TestBed } from '@angular/core/testing';

import { ParentAuthenticationService } from './parent-authentication.service';

describe('ParentAuthenticationService', () => {
  let service: ParentAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
