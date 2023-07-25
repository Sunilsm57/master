import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcdemicActivitiesComponent } from './acdemic-activities.component';

describe('AcdemicActivitiesComponent', () => {
  let component: AcdemicActivitiesComponent;
  let fixture: ComponentFixture<AcdemicActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcdemicActivitiesComponent]
    });
    fixture = TestBed.createComponent(AcdemicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
