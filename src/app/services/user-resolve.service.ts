import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

interface User {
  id: string;
  name: string;
}
@Injectable()
export class UserResolveService implements Resolve<User> {
    constructor(private userService:UserService){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    return this.userService.getUser('2');
  }
}