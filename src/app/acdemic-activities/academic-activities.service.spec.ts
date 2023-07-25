import { TestBed } from '@angular/core/testing';

import { AcademicActivitiesService } from './academic-activities.service';

describe('AcademicActivitiesService', () => {
  let service: AcademicActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
