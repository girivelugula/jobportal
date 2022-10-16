import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:any;

  


  isDash:boolean=false;
  isNews:boolean=false;
  isJob:boolean=false;
  isApply:boolean=false;
  isProfile:boolean=true;
  isEdit:boolean=false;

  constructor(private router:Router,private toast: NgToastService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('loggedInUserName');

}

  onLogout() {
    this.toast.success({ detail: 'Logged Out!', summary: 'You have logged out Successfully', duration: 3000 });
    this.router.navigate(['jobseeker/login']);
  }
  
  onDashClick(){
    this.isDash=true;
    this.isApply=false;
    this.isJob=false;
    this.isNews=false;
    this.isProfile=false;
    this.isEdit=false;
    return;
  }
  onNewsClick(){
    this.isNews=true;
    this.isDash=false;
    this.isApply=false;
    this.isJob=false;
    this.isEdit=false;
    this.isProfile=false;
    return;
  }
  onJobClick(){
    this.isJob=true;
    this.isEdit=false;
    this.isNews=false;
    this.isDash=false;
    this.isApply=false;
    this.isProfile=false;

  }
  onApplyShowClick(){
    this.isApply=true;
    this.isJob=false;
    this.isEdit=false;
    this.isNews=false;
    this.isDash=false;
    this.isProfile=false;
  }
  onEditClick(){
    this.isEdit=true;
    this.isNews=false;
    this.isDash=false;
    this.isApply=false;
    this.isJob=false;
    this.isProfile=false;
  }
  onPersonalClick(){
    this.isNews=false;
    this.isDash=false;
    this.isApply=false;
    this.isJob=false;
    this.isEdit=false;
    this.isProfile=false;
  }
  onProfileClick(){
    this.isProfile=true;
    this.isNews=false;
    this.isDash=false;
    this.isApply=false;
    this.isJob=false;
    this.isEdit=false;
  }
}
