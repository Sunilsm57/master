import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { CommonComponent } from './common/common.component';
import { StudentadmissionComponent } from './common/studentadmission/studentadmission.component';
import { StudentDetailsComponent } from './common/student-details/student-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { AcdemicActivitiesComponent } from './acdemic-activities/acdemic-activities.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ParentDashboardComponent } from './parent/parent-dashboard/parent-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselComponent,
  },
  {
    component: StaffComponent,
    path: 'stafflogin',
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  { path: 'admin', component: AdminComponent },
  {
    path: 'parentport',
    component: ParentComponent,
  },
  {
    path: 'common',
    component: CommonComponent,
  },
  {
    path: 'common/studentadmission',
    component: StudentadmissionComponent,
  },
  {
    path: 'common/studentdetails',
    component: StudentDetailsComponent,
  },
  {
    path: '***',
    component: NotfoundComponent,
  },
  {
    path: 'staff/staffdetails',
    component: StaffDetailsComponent,
  },
  {
    path: 'common/academicactivities',
    component: AcdemicActivitiesComponent,
  },
  {
    path: 'common/timetable',
    component: TimetableComponent,
  },
  {
    path: 'dashboard',
    component: ParentDashboardComponent,
  },
  {
    path: 'parentlogin',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
