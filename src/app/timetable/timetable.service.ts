import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  constructor(private http: HttpClient) {}

  getTimeTable() {
    return this.http.get('http://localhost:5000/timetable1ststand');
  }
}
