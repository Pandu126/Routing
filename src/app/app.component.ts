import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  isButtonVisible = true;
  constructor(private router: Router, private authService: AuthService) {}
  onLogInClick() {
    this.router.navigate(['/login']);
  }
  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/about']);
  }
}
