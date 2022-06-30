import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input() editUserDetails:User;
  @Output() editUserDetailsChange: EventEmitter<User> = new EventEmitter();

  // user:{id:string; name:string; age:number; gender:string};
  constructor() { }
  ngOnInit(): void {
    // console.log(this.editUserDetails);
  }
  ngOnChanges(simpleChanges: SimpleChanges){
    // this.editUserDetailsChange.emit(this.editUserDetails);
    
  }
  updateUserDetails(){
    this.editUserDetailsChange.emit(this.editUserDetails);
  }
}
