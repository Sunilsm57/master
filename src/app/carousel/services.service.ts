import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  staffMember = 'http://localhost:5000/staffMembers';

  constructor(private http: HttpClient) {}

  getStaffMember() {
    return this.http.get(this.staffMember);
  }
}
