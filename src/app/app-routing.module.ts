import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { AuthGuardService } from './services/auth-guard.services';
import { UserResolveService } from './services/user-resolve.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { myVal: UserResolveService },
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'randomUser',
    component: RandomUserComponent,
    canActivate: [AuthGuardService],
  },

  { path: 'about', component: AboutComponent },
  {
    path: 'editUser',
    component: EditUserComponent,
    resolve: { myVal: UserResolveService },
    canActivate: [AuthGuardService],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
