import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentService } from './student-details/studentdetails.service';
import { CommonService } from './common.service';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponent {
  value1: any;
  data: any;
  constructor(
    private act: ActivatedRoute,
    private router: Router,
    private services: CommonService
  ) {}

  ngOnInit() {
    this.getStudentdata();
  }
  getStudentdata() {
    this.services.getAccessAbleData().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
  navigateTo(event: any) {
    if (event) {
      this.value1 = (event.target as HTMLInputElement).value;
      this.router.navigateByUrl(this.value1);
    }
    return false;
  }
}
