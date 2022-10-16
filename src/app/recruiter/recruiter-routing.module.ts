import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RDashboardComponent } from './rdashboard/rdashboard.component';
import { RecLoginComponent } from './reclogin/reclogin.component';
import { RecSignupComponent } from './recsignup/recsignup.component';

const routes: Routes = [
  {path:'rlogin' , component: RecLoginComponent},
  {path:'rsignup' , component: RecSignupComponent},
  {path:'rdashboard' , component: RDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
