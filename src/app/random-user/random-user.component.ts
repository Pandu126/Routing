import { Component, OnInit } from '@angular/core';
import { RandomUser } from '../services/randomUser.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {

  post:any;
  constructor(private randomUser:RandomUser) { }
  
  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
  this.randomUser.getPost().subscribe((res)=>{
      this.post=res;
    console.log(this.post);
  });
  // console.log(this.randomUser.getPost());
  } 
}
