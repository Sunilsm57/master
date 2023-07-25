import { Component } from '@angular/core';
import { AcademicActivitiesService } from './academic-activities.service';

@Component({
  selector: 'app-acdemic-activities',
  templateUrl: './acdemic-activities.component.html',
  styleUrls: ['./acdemic-activities.component.css'],
})
export class AcdemicActivitiesComponent {
  activities: any;
  constructor(private academicServices: AcademicActivitiesService) {}
  ngOnInit() {
    this.academicServices.getAcademicAct().subscribe((res) => {
      this.activities = res;
    });
  }
}
