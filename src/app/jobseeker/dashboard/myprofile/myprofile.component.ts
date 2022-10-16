import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  username:any;
  firstName:any;
  lastName:any;
  email:any;
  phone:any;
  dob:any;
  gender:any;
  qual:any;
  pref:any;
  exp:any;
  type:any;
  userProfile:any;
  

  constructor(private userService:UserServicesService) { }

  ngOnInit(): void {
    
    // this.firstName = localStorage.getItem('firstName');
    // this.lastName = localStorage.getItem('lastName');
    // this.email = localStorage.getItem('email');
    // this.phone = localStorage.getItem('phone');
    // this.dob = localStorage.getItem('dob');
    // this.gender = localStorage.getItem('gender');
    // this.qual = localStorage.getItem('qual');
    // this.pref = localStorage.getItem('pref');
    // this.exp = localStorage.getItem('exp');
    // this.type = localStorage.getItem('type');

    this.userService.getUserProfileData()
    .subscribe(
      (data:any) => {
        this.firstName = data[0].fname;
        this.lastName = data[0].lname;
        this.email = data[0].email;
        this.phone = data[0].phone;
        this.dob = data[0].dob;
        this.gender = data[0].gender;
        this.qual = data[0].qual;
        this.pref = data[0].pref;
        this.exp = data[0].exp;
        this.type = data[0].type;
        this.userProfile = data;
      }
    )
  }
editUser(){
    
}
}
