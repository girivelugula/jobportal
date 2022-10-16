import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { connect } from 'rxjs';

@Component({
  selector: 'app-rdashboard',
  templateUrl: './rdashboard.component.html',
  styleUrls: ['./rdashboard.component.css']
})
export class RDashboardComponent implements OnInit {

  username: any;
  companyName: any;
  locationName: any;
  email: any;
  phone: any;
  jobsCount: any;
  jobData: any;

  isDash: boolean = true;
  isJob: boolean = false;
  isProfile: boolean = false;
  isPosted: boolean = false;
  isMessages: boolean = false;
  isArrow: boolean = true;

  constructor(private router: Router, private toast: NgToastService, private recService: RecruiterService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('rloggedInUserName');
   
  }



  onLogout() {
    this.toast.success({ detail: 'Logged Out!', summary: 'You have logged out Successfully', duration: 3000 });
    this.router.navigate(['recruiter/rlogin']);
  }
  onDashClick() {
    this.isDash = true;
    this.isJob = false;
    this.isProfile = false;
    this.isMessages = false;
    this.isPosted = false;
  }
  onJobClick() {
    this.isJob = true;
    this.isDash = false;
    this.isProfile = false;
    this.isMessages = false;
    this.isPosted = false;
  }
  onMessagesClick() {
    this.isMessages = true;
    this.isJob = false;
    this.isDash = false;
    this.isProfile = false;
    this.isPosted = false;
  }
  onProfileClick() {
    this.isProfile = true;
    this.isDash = false;
    this.isJob = false;
    this.isMessages = false;
    this.isPosted = false;
  }
  onPostedClick() {
    this.isPosted = true;
    this.isProfile = false;
    this.isDash = false;
    this.isJob = false;
    this.isMessages = false;
  }
  toggle() {
    this.isArrow = false;
  }
  toggle2() {
    this.isArrow = true;
  }

  postedJobsCount() {

  }
}
