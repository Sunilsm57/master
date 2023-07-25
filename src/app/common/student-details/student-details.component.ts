import { Component } from '@angular/core';
import { StudentService } from './studentdetails.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  data: any;
  display = false;
  value1: any;
  constructor(private services: StudentService, private act: ActivatedRoute) {}

  ngOnInit() {}

  getStudentDetails(event: any) {
    this.display = true;
    this.value1 = (event.target as HTMLInputElement).value;
    console.log();
    this.services.getStudentDetails(this.value1).subscribe((res) => {
      console.log((this.data = res));
    });
  }
}
