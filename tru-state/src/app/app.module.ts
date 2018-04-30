import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./auth/login.component";
import {AuthService} from "./auth/auth.service";
import {HomeComponent} from "./home/home.component";
import { RouterModule, Routes } from '@angular/router';
import {UserCreateComponent} from "./users/user.create.component";

const appRoutes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'auth/login.component', component:LoginComponent},
  {path:'create-user', component:UserCreateComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'}
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
