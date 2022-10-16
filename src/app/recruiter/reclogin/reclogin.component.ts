import { Component,  OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgToastService } from 'ng-angular-popup';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-reclogin',
  templateUrl: './reclogin.component.html',
  styleUrls: ['./reclogin.component.css']
})
export class RecLoginComponent implements OnInit {

  //declarations

   recLoginForm: FormGroup = this.formBuilder.group({
    recLoginEmail: ["", [Validators.required, Validators.email]],
    recLoginPass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
  })
  userData: any;
  recJobData:any;
  visible: boolean = true;
  changetype: boolean = true;


  //constructors
  constructor(private formBuilder: FormBuilder, private userService: RecruiterService,private router:Router,private toast:NgToastService) { }

  //ngOnInIt
  ngOnInit(): void {
    this.userService.getRecUserData().subscribe((result) => {
      console.log(result);
      this.userData = result;
    })
    this.userService.getJobData().subscribe((result)=>{
      console.log(result);
      this.recJobData = result;
    })
    
  }

  //function definitions
  onLogin() {
    if (this.recLoginForm.valid) {
      const rloggednInUser = this.userData.find((item: any) => (item.email === this.recLoginForm.controls['recLoginEmail'].value))
      const ruserProfile = this.userData.find((item:any) => (item.email === this.recLoginForm.controls['recLoginEmail'].value))
      if (this.userData.some((item: any) => (item.email === this.recLoginForm.controls['recLoginEmail'].value) && (item.password === this.recLoginForm.controls['recLoginPass'].value))) {
        this.toast.success({detail:'Successful!',summary:'You have logged in Successfully',duration:3000});
        localStorage.setItem('rloggedInUserName', rloggednInUser.cname);
        // localStorage.setItem('companyName', ruserProfile.cname);
        // localStorage.setItem('locationName', ruserProfile.lname);
        // localStorage.setItem('email', ruserProfile.email);
        // localStorage.setItem('phone', ruserProfile.phone);
        localStorage.setItem('recId', ruserProfile.id);
        this.router.navigate(['recruiter/rdashboard']);
      }
      else if (this.userData.some((item: any) => (item.email !== this.recLoginForm.controls['recLoginEmail'].value))) {
        this.toast.error({detail:'Error!!',summary:'User has not registered yet',duration:3000});
      }
    }
  }
  toggle() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
