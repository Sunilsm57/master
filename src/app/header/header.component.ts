import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  value1: any;
  constructor(private router: Router) {}
  navigateTo(event: any) {
    if (event) {
      this.value1 = (event.target as HTMLInputElement).value;
      this.router.navigateByUrl(this.value1);
    }
    return false;
  }
}
