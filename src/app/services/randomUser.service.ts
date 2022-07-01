import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class RandomUser {
//   post: any;
interval:number;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.getPost();
  }
  getPost() {
    return this.http.get('https://randomuser.me/api/')
  }
}
