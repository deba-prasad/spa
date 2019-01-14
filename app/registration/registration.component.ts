import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

    
  public myGroup=new FormGroup({
    fname:new FormControl(null,Validators.required),
    mname:new FormControl(null,Validators.required),
    lname:new FormControl(null,Validators.required),
    mno:new FormControl(null,Validators.pattern("\\d{10}")),
    email:new FormControl(null,Validators.email),
    pwd:new FormControl(null,Validators.required),
    cpwd:new FormControl(null,Validators.required)
    });

}
