import { Component } from '@angular/core';
import { ParentAuthenticationService } from '../parent-authentication.service';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent {
  students: any[] = [];
  selectedStudent: any = null;

  constructor(private authService: ParentAuthenticationService) {}

  ngOnInit() {
    // Assuming you have a method to get the parent's ID after successful login
    const parentId = this.getParentIdFromLocalStorage();
    this.authService.getAssociatedStudents(parentId).subscribe(
      (data) => {
        this.students = data; // Assuming the API returns an array of associated students
      },
      (error) => {
        // Handle error fetching associated students
      }
    );
  }

  showStudentDetails(studentId: number) {
    // Use the filter method to find the selected student from the students array
    this.selectedStudent = this.students.find(
      (student) => student.id === studentId
    );

    // Assuming you have a method to get the student details from the API
    this.authService.getStudentDetails(studentId).subscribe(
      (data: any) => {
        // Set the selectedStudent object with the retrieved student details
        this.selectedStudent = data;
      },
      (error: any) => {
        // Handle error fetching student details
      }
    );
  }
  getParentIdFromLocalStorage(): number {
    const parentId = localStorage.getItem('parentId');
    return parentId ? parseInt(parentId, 10) : 0;
  }
}
