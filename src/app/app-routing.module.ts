import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SelectorComponent } from './home/selector/selector.component';



const routes: Routes = [
  {
    path: 'jobseeker',loadChildren: () => import('./jobseeker/jobseeker.module')
      .then(mod => mod.JobseekerModule)
  },
  {
    path: 'recruiter', loadChildren: () => import('./recruiter/recruiter.module')
      .then(mod => mod.RecruiterModule)
  },

  { path: 'home', component: HomeComponent },
  { path: 'selector', component: SelectorComponent },
  { path: 'about', component: AboutComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
