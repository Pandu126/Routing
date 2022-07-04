import { Component, OnDestroy, OnInit } from '@angular/core';
import { RandomUser } from '../services/randomUser.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit,OnDestroy {
  profileDetails: any;
  interval:number;
  constructor(private randomUser: RandomUser) {}

  ngOnInit(): void {
    this.getProfile();
    this.getAds();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
  }
  freezeProfile(){
    clearInterval(this.interval)
  }

  getProfile() {
    return this.randomUser.getPost().subscribe((Response: any) => {
      // console.log(Response)
      return this.profileDetails=Response['results'][0]
    });
  }
  getAds() {
    this.interval = window.setInterval(() => {
      this.getProfile();
    }, 3000);
  }
}
