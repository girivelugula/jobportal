import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from '../../services/user-services.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //declarations

  loginForm: FormGroup = this.formBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
  })
  userData: any;
  visible: boolean = true;
  changetype: boolean = true;
  retUrl: any = "home";


  //constructors
  constructor(private formBuilder: FormBuilder, private userService: UserServicesService, private router: Router, private toast: NgToastService, private activatedRoute: ActivatedRoute) { }

  //ngOnInIt
  ngOnInit(): void {
    this.userService.getUserData().subscribe((result) => {
      // console.log(result);
      this.userData = result;
    })

    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
        console.log('LoginComponent/ngOnInit ' + this.retUrl);
      });
  }

  //function definitions
  onLogin() {
    if (this.loginForm.valid) {
      const loggednInUser = this.userData.find((item: any) => (item.email === this.loginForm.controls['loginEmail'].value))
      const userProfile = this.userData.find((item: any) => (item.email === this.loginForm.controls['loginEmail'].value))
      if (this.userData.some((item: any) => (item.email === this.loginForm.controls['loginEmail'].value) && (item.password === this.loginForm.controls['loginPass'].value))) {
        this.toast.success({ detail: 'Successful!', summary: 'You have logged in Successfully', duration: 3000 });
        localStorage.setItem('loggedInUserName', loggednInUser.lname);
        localStorage.setItem('userProfileData', this.userData);
        console.log(userProfile);
        // localStorage.setItem('lastName', userProfile.lname);
        // localStorage.setItem('email', userProfile.email);
        // localStorage.setItem('phone', userProfile.phone);
        // localStorage.setItem('dob', userProfile.dob);
        // localStorage.setItem('gender', userProfile.gender);
        // localStorage.setItem('qual', userProfile.qual);
        // localStorage.setItem('pref', userProfile.pref);
        // localStorage.setItem('exp', userProfile.exp);
        // localStorage.setItem('type', userProfile.type);
        localStorage.setItem('userId', userProfile.id);

        this.router.navigate(['jobseeker/jdashboard']);
        // this.router.navigate(['/dashboard',{email:this.loginForm.value.loginEmail}]);
      }
      else if (this.userData.some((item: any) => (item.email !== this.loginForm.controls['loginEmail'].value))) {
        this.toast.error({ detail: 'Error!!', summary: 'User has not registered yet', duration: 3000 });
      }
    }
  }

  toggle() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
