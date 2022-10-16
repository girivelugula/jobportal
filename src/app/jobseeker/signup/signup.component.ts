import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  isSubmitted: boolean = false;
  userData: any;




  constructor(private formBuilder: FormBuilder, private userService: UserServicesService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((result) => {
      console.log(result);
      this.userData = result;
    })
    this.registerForm = this.formBuilder.group({
      fname: ["", [Validators.required, Validators.minLength(5)]],
      lname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/(7|8|9)\d{9,9}$/)]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      qual: ['', [Validators.required]],
      pref: ['', [Validators.required]],
      exp: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
  }
  onDateSelect(event: any) {
    console.log(event)
    const date = new Date(event.year, event.month - 1, event.day);
    console.log(date)
  }
  collectUser() {
    debugger
    if (this.registerForm.valid) {
      if (this.userData.some((item: any) => item.email === this.registerForm.controls['email'].value)) {
        alert('User already exists');
        return;
      }
      const date = new Date(this.registerForm.controls['dob'].value.year, this.registerForm.controls['dob'].value.month - 1, this.registerForm.controls['dob'].value.day);
      this.registerForm.controls['dob'].setValue(date)
      this.userService.saveUser(this.registerForm.value).subscribe((result) => {
        this.toast.success({ detail: 'Success!', summary: 'You have Registered Successfully!!,Please Login!', duration: 3000 });
        this.registerForm.reset({});
        this.router.navigate(['jobseeker/personal']);
      })
    }

  }
}
