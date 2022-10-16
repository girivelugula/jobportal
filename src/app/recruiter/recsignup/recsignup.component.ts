import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterService } from '../../services/recruiter.service';

@Component({
  selector: 'app-recsignup',
  templateUrl: './recsignup.component.html',
  styleUrls: ['./recsignup.component.css']
})

export class RecSignupComponent implements OnInit {

  recRegisterForm!:FormGroup;
  isSubmitted: boolean = false;
  userData: any;
  constructor(private formBuilder: FormBuilder, private userService: RecruiterService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getRecUserData().subscribe((result) => {
      console.log(result);
      this.userData = result;
    })

    this.recRegisterForm = this.formBuilder.group({
      cname: ["", [Validators.required, Validators.minLength(5)]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/(7|8|9)\d{9,9}$/)]],
    })

  }
  onDateSelect(event: any){
    console.log(event)
    const date = new Date(event.year, event.month-1, event.day);
    console.log(date)
  }
  collectUser() {
    debugger
    if (this.recRegisterForm.valid) {

      if (this.userData.some((item: any) => item.email === this.recRegisterForm.controls['email'].value)) {
        alert('User already exists');
        return;
      }
      this.userService.recSaveUser(this.recRegisterForm.value).subscribe((result) => {
        this.isSubmitted = true;
        this.recRegisterForm.reset({});
      })
    }

  }

  closeAlert() {
    this.isSubmitted = false;
  }

}
