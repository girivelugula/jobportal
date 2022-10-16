import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css']
})
export class PostedjobsComponent implements OnInit {

  jobData: any;
  recData: any;
  jobId:any;
  constructor(private userService: RecruiterService) { }

  ngOnInit(): void {
    this.getPostedJobs();
  }
  getPostedJobs() {
    this.userService.getPostedJobData(localStorage.getItem('recId') as string)
      .subscribe(
        data => {
          this.jobData = data;
        }
      )
    // this.userService.getJobData().subscribe((res: any) => {
    //   console.log(res);
    //   this.jobData = res.filter((item: any) => {
    //       return parseInt(item.recId) === parseInt(localStorage.getItem('recId') as string) })
    //   console.log(this.jobData)
    // })
  }



}
