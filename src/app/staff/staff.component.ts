import { Component } from '@angular/core';
import { ServicesService } from './services.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent {
  passwordshow: any;
  show = false;
  submit = false;
  data: any;
  email: any;
  password: any;
  ngOnInit() {
    this.passwordshow = 'password';
  }
  constructor(
    private staffservices: ServicesService,
    private fb: FormBuilder
  ) {}

  staffData = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  getStaffData() {
    this.submit = true;
    this.staffservices.getStaffData().subscribe((res: any) => {
      this.data = res;
      this.data.map((item: any) => {
        if (this.email == item.emailId) {
          console.log('correct');
        } else {
          alert('incorrect email or email is empty');
        }
        if (this.password == item.password) {
          console.log('correct password');
        } else {
          alert('incorrect password or password is empty');
        }
      });
    });
  }
  toggle() {
    if (this.passwordshow == 'password') {
      this.passwordshow = 'text';
      this.show = true;
    } else {
      this.passwordshow = 'password';
      this.show = false;
    }
  }
}
