import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdItem } from './dynamicComponents/ad-item';
import { adService } from './services/ad.service';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];
  title = 'Routing';
  isButtonVisible = true;
  constructor(
    private router: Router,
    private authService: AuthService,
    private adService: adService
  ) {}
  onLogInClick() {
    this.router.navigate(['/login']);
    this.isButtonVisible=false;
  }
  onLogoutClick() {
    this.authService.logout();
    this.isButtonVisible=true;
    this.router.navigate(['/about']);
  }
  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
