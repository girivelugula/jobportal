import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  activeId = 1;
  personalDetails!: FormGroup;
  educationData!:FormGroup;
  userPerData: any;
  educationPerData :any;

  constructor(private formBuilder: FormBuilder, private userService: UserServicesService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({

      addr: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    })
    this.userService.getPersonalData().subscribe((res) => {
      this.userPerData = res;
    })
    this.educationData = this.formBuilder.group({

      uname: ['', [Validators.required]],
      sname: ['', [Validators.required]],
      place: ['', [Validators.required]],
      percentage: ['', [Validators.required]],
      backlogs: ['', [Validators.required]],
      spec: ['', [Validators.required]],
      subs: ['', [Validators.required]],
      yop: ['', [Validators.required]],
      wexp: ['', [Validators.required]],
    })
    this.userService.getPersonalData().subscribe((res) => {
      this.userPerData = res;
    })
    this.userService.getEducationData().subscribe((res) => {
      this.educationPerData = res;
    })
  }
  onSubmit() {
    if (this.personalDetails.valid) {
      // debugger
      this.userService.savePersonalUser(this.personalDetails.value).subscribe((result) => {
        this.toast.success({ detail: 'Success!', summary: 'You have Entered Successfully!!', duration: 3000 });
      })
      this.activeId = 2;
    }
    else {
      this.toast.error({ detail: 'Failed!', summary: 'You have Entered Wrong Details!!', duration: 3000 });
    }
  }
  onBack() {
    this.activeId = 1;
  }
  onSubmit2() {
    if (this.educationData.valid) {
      // debugger
      this.userService.saveEducationData(this.educationData.value).subscribe((result) => {
        this.toast.success({ detail: 'Success!', summary: 'You have Entered Successfully!!', duration: 3000 });
      })
      this.router.navigate(['login'])
    }
    else {
      this.toast.error({ detail: 'Failed!', summary: 'You have Entered Wrong Details!!', duration: 3000 });
    }
  }
}
