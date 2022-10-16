import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-rcdash',
  templateUrl: './rcdash.component.html',
  styleUrls: ['./rcdash.component.css']
})
export class RcdashComponent implements OnInit {

  companyName: any;
  locationName: any;
  email: any;
  phone: any;
  jobsCount: any;
  jobData: any;

  constructor(private recService:RecruiterService) { }

  ngOnInit(): void {
    this.recService.getRecProfile()
    .subscribe(
      (data: any) => {
        this.companyName = data[0].cname;
        this.locationName = data[0].lname;
        this.email = data[0].email;
        this.phone = data[0].phone;
      }
    )

  this.recService.getPostedJobsCount().subscribe((data3: any) => {
    this.jobData = data3;
      console.log(this.jobData);
      this.jobsCount = Object.keys(this.jobData).length;
    })
  }

}
