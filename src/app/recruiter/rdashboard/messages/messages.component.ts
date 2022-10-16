import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  userData:any;
  appliedData:any;
  recJobData:any;
  showHide:boolean=false;
  jobtitle:any;

  constructor(private service1:UserServicesService,private service2:RecruiterService) { }

  ngOnInit(): void {
    this.service1.getUserData().subscribe((result) => {
      console.log(result);
      this.userData = result;
    })
    this.service2.getJobData().subscribe((result)=>{
      console.log(result);
      this.recJobData = result;
    })
    this.service1.getAppliedData().subscribe((result)=>{
      console.log(result);
      this.appliedData = result;
    })
    // this.jobtitle = localStorage.getItem('rJobtitle');
  }

  onClick(){
    this.showHide=true;
  }

}
