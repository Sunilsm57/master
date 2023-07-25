import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AcademicActivitiesService {
  constructor(private http: HttpClient) {}

  getAcademicAct() {
    return this.http.get('http://localhost:5000/academicactivities');
  }
}
