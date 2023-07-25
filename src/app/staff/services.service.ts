import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  staffRegistrationUrl = 'http://localhost:5000/staffRegistration';
  constructor(private http: HttpClient) {}

  getStaffData() {
    return this.http.get<any[]>(this.staffRegistrationUrl);
  }
}
