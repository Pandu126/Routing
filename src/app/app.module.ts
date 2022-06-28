import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './services/auth.services';
import { AuthGuardService } from './services/auth-guard.services';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserResolveService } from './services/user-resolve.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    CategoriesComponent,
    AboutComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [AuthService, AuthGuardService, UserResolveService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
