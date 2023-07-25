import { Component } from '@angular/core';
import { StaffdetailsService } from './staffdetails.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css'],
})
export class StaffDetailsComponent {
  constructor(private services: StaffdetailsService) {}
  ngOnInit() {
    this.services.getStaffData().subscribe((res) => {
      console.log(res);
    });
  }
}
