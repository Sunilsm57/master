import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getStudentDetails(value: any) {
    return this.http.get('http://localhost:5000/class' + value);
  }

  getAccessAbleData() {
    return this.http.get('http://localhost:5000/accessablemodules');
  }
}
