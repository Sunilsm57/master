import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  staffMembers: any;
  constructor(private services: ServicesService) {}

  ngOnInit() {
    this.getStaffMember();
  }
  getStaffMember() {
    this.services.getStaffMember().subscribe((res: any) => {
      this.staffMembers = res;
    });
  }
}
