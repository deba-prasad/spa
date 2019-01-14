import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    public s1:string="";
    public s2:string="";
    public s3:string="";
    public s4:string="";
    public s5:string="";
    public s6:string="";
    public s7:string="";
    public abc:string="";
  
    public student:any[]=
    [
      {id:1,name:"Rajesh",email:"rajesh@gmail.com",class:"Mba",year:2012,city:"Noida",country:"india"}, 
      {id:2,name:"Chhiti",email:"chitti@gmail.com",class:"Mca",year:2013,city:"Mumbai",country:"india"},
      {id:3,name:"Ramesh",email:"ramesh@gmail.com",class:"B.tec",year:2014,city:"Banglore",country:"india"},
      {id:4,name:"Gopal",email:"gopal@gmail.com",class:"M.tec",year:2015,city:"Goa",country:"india"},
      {id:5,name:"Ajaya",email:"ajaya@gmail.com",class:"Mba",year:2016,city:"Chennie",country:"india"},
      {id:6,name:"Sam",email:"sam@gmail.com",class:"Mca",year:2017,city:"Pune",country:"india"},
      {id:7,name:"Rajni",email:"rajni@gmail.com",class:"B.tec",year:2018,city:"Hydrabad",country:"india"},
    ];
    public f1():void
    {
      let obj:any={};
      obj.id=this.s1;
      obj.name=this.s2;
      obj.email=this.s3;
      obj.class=this.s4;
      obj.year=this.s5;
      obj.city=this.s6;
      obj.country=this.s7;
      this.student.push(obj);
      this.abc="Student Details Added Successfully";
    }
    public f2():void
    {
      var sid:string=this.s1;
      var n:number=0;
      n=this.student.findIndex(x=>x.id==sid);
      this.student[n].name=this.s2;
      this.student[n].email=this.s3;
      this.student[n].class=this.s4;
      this.student[n].year=this.s5;
      this.student[n].city=this.s6;
      this.student[n].country=this.s7;
    }
    public f3(n:number):void
    {
     let obj:any=this.student[n];
     this.s1=obj.id;
     this.s2=obj.name;
     this.s3=obj.email;
     this.s4=obj.class;
     this.s5=obj.year;
     this.s6=obj.city;
     this.s7=obj.country;
    }
    public f4(n:number):void
    {
      this.student.splice(n,1);
    }
  }
  

