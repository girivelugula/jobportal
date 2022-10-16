import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {  NgToastModule } from 'ng-angular-popup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobseekerRoutingModule } from './jobseeker-routing.module';
import { SearchFilterPipe } from './search-filter.pipe';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SearchjobsComponent } from './dashboard/searchjobs/searchjobs.component';
import { AppliedjobsComponent } from './dashboard/appliedjobs/appliedjobs.component';
import { MyprofileComponent } from './dashboard/myprofile/myprofile.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { JcdashComponent } from './dashboard/jcdash/jcdash.component';



@NgModule({
  declarations: [
    EditComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    SearchjobsComponent,
    AppliedjobsComponent,
    MyprofileComponent,
    HeaderComponent,
    FooterComponent,
    SearchFilterPipe,
    PersonaldetailsComponent,
    JcdashComponent
  ],
  imports: [
    CommonModule,
    JobseekerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobseekerModule { }
