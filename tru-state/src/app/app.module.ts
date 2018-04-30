import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule, MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./auth/login.component";
import {AuthService} from "./auth/auth.service";
import {HomeComponent} from "./home/home";
import { RouterModule, Routes } from '@angular/router';
import {UserCreateComponent} from "./users/user.create.component";

const appRoutes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'create-user', component:UserCreateComponent}
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule, MatProgressSpinnerModule, HttpClientModule, MatInputModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
