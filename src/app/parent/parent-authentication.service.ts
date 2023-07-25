import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class ParentAuthenticationService {
  private baseUrl = '';

  constructor(private http: HttpClient) {}

  login(email: string, mobileno: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, mobileno });
  }
  getAssociatedStudents(parentId: number) {
    return this.http.get<any>(`${this.baseUrl}/students/${parentId}`);
  }
  getStudentDetails(studentId: number) {
    return this.http.get<any>(`${this.baseUrl}/student/${studentId}`);
  }
}
