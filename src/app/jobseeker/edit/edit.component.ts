import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserServicesService } from 'src/app/services/user-services.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  alert!:boolean;
  editUser=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    type:new FormControl(''),
    dob:new FormControl(''),
  })
  constructor(private editService:UserServicesService,private route:ActivatedRoute,private toast:NgToastService,private route2:Router) { }

  ngOnInit(): void {
    this.editService.getCurrentData(this.route.snapshot.params['id']).subscribe((result:any)=>{
      this.editUser=new FormGroup({
        fname:new FormControl(result['fname']),
        lname:new FormControl(result['lname']),
        phone:new FormControl(result['phone']),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
        type:new FormControl(result['type']),
        dob:new FormControl(result['dob']),
      })
    })
  }
  updateUser(){
    this.editService.updateUser(this.route.snapshot.params['id'],this.editUser.value).subscribe((result)=>{
      console.log(result,"data updated!!");
      this.toast.success({detail:'Successful!',summary:'Your has been updated Successfully',duration:5000});
      this.route2.navigate(['/list'])
    })
  }

}
