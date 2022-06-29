import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() editUserDetails:any;
  @Output() updateUser: EventEmitter<any> = new EventEmitter();

  // user:{id:string; name:string; age:number; gender:string};
  constructor() { }
  ngOnInit(): void {
    console.log(this.editUserDetails);
  }

  updateUserDetails(){
    this.updateUser.emit(this.editUserDetails);
  }
}
