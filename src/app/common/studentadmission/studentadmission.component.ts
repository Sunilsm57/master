import { Component } from '@angular/core';
import { StudentadmissionService } from './studentadmission.service';
import { StudentService } from '../student-details/studentdetails.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentadmission',
  templateUrl: './studentadmission.component.html',
  styleUrls: ['./studentadmission.component.css'],
})
export class StudentadmissionComponent {
  value1: any;
  id: any;
  name: any;
  adhaarno: any;
  age: any;
  admissionfor: any;
  DOB: any;
  gender: any;
  fatherName: any;
  motherName: any;
  mobileno: any;
  alternateno: any;
  emailId: any;
  religion: any;
  fees: any;
  permanentaddress: any;
  temporaryaddress: any;
  perviousschool: any;
  busfacility: any;
  attendancestatus: any;
  constructor(
    private studentServices: StudentService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  admissionData = this.fb.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    adhaarno: ['', [Validators.required]],
    age: ['', [Validators.required]],
    admissionfor: ['', [Validators.required]],
    DOB: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    fatherName: ['', [Validators.required]],
    motherName: ['', [Validators.required]],
    mobileno: ['', [Validators.required]],
    alternateno: ['', [Validators.required]],
    emailId: ['', [Validators.required]],
    religion: ['', [Validators.required]],
    fees: ['', [Validators.required]],
    permanentaddress: ['', [Validators.required]],
    temporaryaddress: ['', [Validators.required]],
    perviousschool: ['', [Validators.required]],
    busfacility: ['', [Validators.required]],
    attendancestatus: ['', [Validators.required]],
  });

  setStudentDetails() {
    let userData = {
      id: this.id,
      name: this.name,
      adhaarno: this.adhaarno,
      age: this.age,
      admissionfor: this.admissionfor,
      DOB: this.DOB,
      gender: this.gender,
      fatherName: this.fatherName,
      motherName: this.motherName,
      mobileno: this.mobileno,
      alternateno: this.alternateno,
      emailId: this.emailId,
      religion: this.religion,
      fees: this.fees,
      permanentaddress: this.permanentaddress,
      temporaryaddress: this.temporaryaddress,
      perviousschool: this.perviousschool,
      busfacility: this.busfacility,
    };
    this.http
      .post('http://localhost:5000/' + this.value1, userData)
      .subscribe((res) => {
        console.log(res);
      });
    console.log(this.admissionData);
    this.admissionData.reset();
  }

  getClass(event: any) {
    this.value1 = (event.target as HTMLInputElement).value;
  }
}
