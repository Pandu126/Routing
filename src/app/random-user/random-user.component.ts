import { Component, OnInit } from '@angular/core';
import { RandomUser } from '../services/randomUser.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit {
  profileDetails: any;
  constructor(private randomUser: RandomUser) {}

  ngOnInit(): void {
    this.getProfile();
  }
  nextUser() {
    this.getProfile();
  }
  getProfile() {
    return this.randomUser.getPost().subscribe((Response: any) => {
      return this.profileDetails=Response['results'][0]
    });
  }
}
