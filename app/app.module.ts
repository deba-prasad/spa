import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import {Injectable} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

const Route:Routes=[
  {path:"home",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"login",component:LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Route),
    ReactiveFormsModule,
    
  ],
  providers: [AuthGuard,Injectable],
  bootstrap: [AppComponent]
})
export class AppModule { }
