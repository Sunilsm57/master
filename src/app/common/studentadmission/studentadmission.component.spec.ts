import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentadmissionComponent } from './studentadmission.component';

describe('StudentadmissionComponent', () => {
  let component: StudentadmissionComponent;
  let fixture: ComponentFixture<StudentadmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentadmissionComponent]
    });
    fixture = TestBed.createComponent(StudentadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
