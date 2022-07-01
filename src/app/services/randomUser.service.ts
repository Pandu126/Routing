import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RandomUser {
  constructor(private http: HttpClient) {}
  getPost() {
    return this.http.get('https://randomuser.me/api/');
  }
}
