import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

public uid:string="";
public pwd:string="";
public result:string="";
public returnUrl:string="";

  constructor(private route:ActivatedRoute) 
  { 
    this.returnUrl=this.route.snapshot.queryParams["returnUrl"];
    if(this.returnUrl==null)
    {
      this.returnUrl="/home";
    }
  }
public f1():void
{
  if(this.uid=="user@gmail.com" && this.pwd=="123456")
  {
    sessionStorage.setItem("AUTH-TOKEN",this.uid);
    location.href="/dashboard";
  }
  else
  {
    this.result="invalid User Id Or password";
  }
}
  

}
