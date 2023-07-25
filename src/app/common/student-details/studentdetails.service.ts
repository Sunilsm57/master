import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentDeatilsUrl = ' http://localhost:5000/';
  constructor(private http: HttpClient) {}

  getStudentDetails(value: any) {
    return this.http.get(this.studentDeatilsUrl + value);
  }
}
