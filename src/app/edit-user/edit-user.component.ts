import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface User { id: string; name: string; age: number; gender: string }

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: User;
  editUserDetails: User;
  // editUserDetailsNew : any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data)
      this.user = data['myVal'];
      this.editUserDetails=data['myVal'];
      // this.editUserDetails = { ...this.user };
      // this.editUserDetailsNew ={...this.editUserDetails};
    });
  }
}
