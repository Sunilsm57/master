import { TestBed } from '@angular/core/testing';

import { StudentadmissionService } from './studentadmission.service';

describe('StudentadmissionService', () => {
  let service: StudentadmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentadmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
