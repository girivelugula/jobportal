import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  url3 = "http://localhost:3500/RecruiterDetails"
  url4 = "http://localhost:3500/JobData"
  url5 = "http://localhost:3500/WhoApplied"


  constructor(private http: HttpClient) { }

  //Recruiter Reg Details
  getRecUserData() {
    return this.http.get(this.url3);
  }
  recSaveUser(data: any) {
    return this.http.post(this.url3, data);
  }

  //Recruiter Job Post Details       

  getJobData() {
    return this.http.get(this.url4);
  }
  getPostedJobData(recId: string) {
    return this.http.get(this.url4+`?recId=${recId}`);
  }
  saveJobData(data: any) {
    return this.http.post(this.url4, data);
  }
  getRecProfile(){
    return this.http.get(this.url3 +'?id='+localStorage.getItem('recId'));
}

  //WhoApplied

  saveWhoApplied(data: any) {
    return this.http.post(this.url5, data);
  }

  getPostedJobsCount(){
    return this.http.get(this.url4  + '?recId='+localStorage.getItem('recId'));
  }

}
