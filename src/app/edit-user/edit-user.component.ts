import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: { id: string; name: string };
  editUserDetails: { id: string; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.user = {
        id: data['user']['id'],
        name: data['user']['name'],
      };
      this.editUserDetails = { ...this.user };
    });
  }
}
