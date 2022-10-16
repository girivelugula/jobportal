import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.component.html',
  styleUrls: ['./postajob.component.css']
})
export class PostajobComponent implements OnInit {

  postForm!: FormGroup;
  jobData: any;

  constructor(private formBuilder: FormBuilder, private userService: RecruiterService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      jobtitle: ["", Validators.required],
      location: ["", Validators.required],
      jdesc: ["", Validators.required],
      skills: ["", Validators.required],
      recId: [""],
      jobId: [""]
    })
    this.userService.getJobData().subscribe((result) => {
      console.log(result);
      this.jobData = result;
    })
  }

  //Function Definitions
  onPost() {
    if (this.postForm.valid) {
      this.postForm.controls['recId'].setValue(localStorage.getItem("recId"))
      this.userService.saveJobData(this.postForm.value).subscribe((result) => {
        this.toast.success({ detail: 'Success!', summary: 'You have succesfully posted a job', duration: 3000 });
        this.postForm.reset({});
      })
    }
  }


}


