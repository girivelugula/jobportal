import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AppliedjobsComponent } from './dashboard/appliedjobs/appliedjobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JcdashComponent } from './dashboard/jcdash/jcdash.component';
import { MyprofileComponent } from './dashboard/myprofile/myprofile.component';
import { SearchjobsComponent } from './dashboard/searchjobs/searchjobs.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'personal', component: PersonaldetailsComponent },
  { path: 'jdashboard', component: DashboardComponent,  children: [
    { path: 'appliedjobs', component: AppliedjobsComponent},
    { path: 'jobs', component: SearchjobsComponent},
    { path: 'myprofile', component:MyprofileComponent},
    { path: 'jcdash', component: JcdashComponent},
    { path: 'edit', component: EditComponent}
  ], canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekerRoutingModule { }
