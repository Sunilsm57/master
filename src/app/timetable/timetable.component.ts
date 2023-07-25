import { Component } from '@angular/core';
import { TimetableService } from './timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
})
export class TimetableComponent {
  timetable: any;
  classtimetable: any;
  constructor(private timetableServices: TimetableService) {}
  ngOnInit() {
    this.timetableServices.getTimeTable().subscribe((res) => {
      this.timetable = res;
    });
  }
}
