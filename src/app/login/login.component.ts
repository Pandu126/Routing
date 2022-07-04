import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalid: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  validate(uname:string, pwd:string) {
  
    // console.log(uname, pwd);
    
    if (uname == "admin" && pwd == "admin") {
      this.authService.login();
      this.router.navigate(['/home']);
    } else {
      // alert('Enter Valid Credentials.');
      this.invalid = true;
      // this.router.navigate(['login']);
    }
  }
}
