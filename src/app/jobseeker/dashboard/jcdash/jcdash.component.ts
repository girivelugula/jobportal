import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-jcdash',
  templateUrl: './jcdash.component.html',
  styleUrls: ['./jcdash.component.css']
})
export class JcdashComponent implements OnInit {

  companyName: any;
  locationName: any;
  email: any;
  phone: any;
  jobsCount: any;
  jobData: any;

  constructor(private userService: UserServicesService,private route:Router) { }

  ngOnInit(): void {

    // this.userService.get()
    // .subscribe(
    //   (data: any) => {
    //     this.companyName = data[0].cname;
    //     this.locationName = data[0].lname;
    //     this.email = data[0].email;
    //     this.phone = data[0].phone;
    //   }
    // )
    this.userService.getAppliedJobsCount().subscribe((data3: any) => {
      this.jobData = data3;
      console.log(this.jobData);
      this.jobsCount = Object.keys(this.jobData).length;
    })
  }
  appliedJobs(){
    this.route.navigate(['jobseeker/appliedjobs'])
  }

}
