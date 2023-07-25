import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StaffComponent } from './staff/staff.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { AdmissionComponent } from './admission/admission.component';
import { CommonComponent } from './common/common.component';
import { StudentadmissionComponent } from './common/studentadmission/studentadmission.component';
import { StudentDetailsComponent } from './common/student-details/student-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { AcdemicActivitiesComponent } from './acdemic-activities/acdemic-activities.component';
import { StaffAttendanceComponent } from './staff/staff-attendance/staff-attendance.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ParentDashboardComponent } from './parent/parent-dashboard/parent-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaffComponent,
    CarouselComponent,
    ContactusComponent,
    AdminComponent,
    ParentComponent,
    AdmissionComponent,
    CommonComponent,
    StudentadmissionComponent,
    StudentDetailsComponent,
    NotfoundComponent,
    StaffDetailsComponent,
    AcdemicActivitiesComponent,
    StaffAttendanceComponent,
    TimetableComponent,
    ParentDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
