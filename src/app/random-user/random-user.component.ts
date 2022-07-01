import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { RandomUser } from '../services/randomUser.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit {
  profileDetails: any;
  constructor(private randomUser: RandomUser, private http: HttpClient) {}

  ngOnInit(): void {
    this.getProfile();
  }
  nextUser() {
    this.getProfile();
  }
  // getProfile() {
  //   return this.http.get('https://randomuser.me/api/').subscribe((res) => {
  //     this.profile = res;
  //     this.profileDetails = this.profile['results'][0];
  //     console.log(this.profile);
  //     console.log(this.profileDetails);
  //   });
  getProfile() {
    return this.randomUser.getPost().subscribe((Response: any) => {
      return this.profileDetails=Response['results'][0]
    });
  }
}
