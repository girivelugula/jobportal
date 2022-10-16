import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  url = "http://localhost:3000/Registration"
  url2 = "http://localhost:3000/PersonalDetails"
  url3 = "http://localhost:3000/AppliedJobs"
  url4 = "http://localhost:3000/EducationDetails"

  constructor(private http: HttpClient) { }

  //Reg User Data Services
  getUserData() {
    return this.http.get(this.url);
  }
  saveUser(data: any) {
    return this.http.post(this.url, data)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentData(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  updateUser(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }



  //Personal Data Services

  getPersonalData() {
    return this.http.get(this.url2);
  }
  savePersonalUser(data: any) {
    return this.http.post(this.url2, data)
  }

  //Education Data

  getEducationData() {
    return this.http.get(this.url4);
  }
  saveEducationData(data: any) {
    return this.http.post(this.url4, data)
  }

  //UserProfile Data 
  getUserProfileData() {
    return this.http.get(this.url + '?id=' + localStorage.getItem('userId'));
  }

  //Applied Jobs
  getAppliedData() {
    return this.http.get(this.url3);
  }
  saveAppliedData(data: any) {
    return this.http.post(this.url3, data)
  }
  getAppliedJobData(userId: string) {
    return this.http.get(this.url3 + `?userId=${userId}`);
  }
  getAppliedJobsCount() {
    return this.http.get(this.url3 + '?userId=' + localStorage.getItem('userId'));
  }
}

