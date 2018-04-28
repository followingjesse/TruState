import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule, MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./auth/login.component";
import {AuthService} from "./auth/auth.service";
import {Routes} from "@angular/router";

const appRoutes: Routes = [
  {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule, MatProgressSpinnerModule, HttpClientModule, MatInputModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
