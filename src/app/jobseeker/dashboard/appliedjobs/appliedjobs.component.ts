import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit {

  appliedJobData:any;
  jobData: any;
  jobsCount: any;

  constructor(private userService:UserServicesService) { }

  ngOnInit(): void {
    this.getAppliedJobs();
    this.userService.getAppliedJobsCount().subscribe((data3: any) => {
      this.jobData = data3;
      console.log(this.jobData);
      this.jobsCount = Object.keys(this.jobData).length;
    })
  }

  getAppliedJobs() {
    this.userService.getAppliedJobData(localStorage.getItem('userId') as string)
      .subscribe(
        data => {
          this.appliedJobData = data;
        }
      )
      if(this.jobsCount==0){
        alert('no jobs applied yet')
      }
    // this.userService.getJobData().subscribe((res: any) => {
    //   console.log(res);
    //   this.jobData = res.filter((item: any) => {
    //       return parseInt(item.recId) === parseInt(localStorage.getItem('recId') as string) })
    //   console.log(this.jobData)
    // })
  }


}
