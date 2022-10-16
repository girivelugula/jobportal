import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-searchjobs',
  templateUrl: './searchjobs.component.html',
  styleUrls: ['./searchjobs.component.css']
})
export class SearchjobsComponent implements OnInit {

  userData: any;
  searchText: any;
  appliedData: any;
  email:any;
  phone:any;
  exp:any;
  isApply: boolean = true;
  userId: any = [''];
  // jobId: any;

  constructor(private service: RecruiterService, private service2: UserServicesService, private toast: NgToastService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getJobData().subscribe((result: any) => {
      console.log(result);
      this.userData = result;
    })
    // this.service2.getAppliedData().subscribe((result)=>{
    //   console.log(result);
    //   this.appliedData=result;
    // })
    this.userId = localStorage.getItem("userId");
    // this.jobId = localStorage.getItem("jobId");
    // console.log(this.jobId);

    this.service2.getUserProfileData()
    .subscribe(
      (data:any) => {
        this.email = data[0].email;
        this.phone = data[0].phone;
        this.exp = data[0].exp;
      }
    )


  }



  onApplyClick(user: any) {
    debugger
    this.service2.saveAppliedData({ ...user, email: this.email, phone: this.phone, exp: this.exp, userId: this.userId }).subscribe((result) => {
      this.toast.success({ detail: 'Success!!', summary: 'You have applied successfully', duration: 3000 });
      this.route.navigate(['appliedjobs'],{relativeTo:this.activatedRoute})
    })
  }





}
