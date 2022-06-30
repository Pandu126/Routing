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
    return this.http
      .get('https://randomuser.me/api/')
      .pipe(
        map((response: any) => {
    console.log(response) 
     return response['results'][0]
    //       let post = [];
    //       for (let key in response) {
    //         post.push({ ...response[key], key });
    //       }
    //       return post;
        })
      );
  }
  getAds() {
    this.interval = window.setInterval(() => {
      this.getPost();
    }, 500);
  }
}
