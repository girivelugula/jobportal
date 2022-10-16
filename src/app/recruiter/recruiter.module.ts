import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RecSignupComponent } from './recsignup/recsignup.component';
import { RDashboardComponent } from './rdashboard/rdashboard.component';
import { PostedjobsComponent } from './rdashboard/postedjobs/postedjobs.component';
import { PostajobComponent } from './rdashboard/postajob/postajob.component';
import { MessagesComponent } from './rdashboard/messages/messages.component';
import { RecLoginComponent } from './reclogin/reclogin.component';
import { RHeaderComponent } from './rheader/header.component';
import { RFooterComponent } from './rfooter/footer.component';
import { RcdashComponent } from './rdashboard/rcdash/rcdash.component';




@NgModule({
  declarations: [
    RecLoginComponent,
    RecSignupComponent,
    RDashboardComponent,
    PostedjobsComponent,
    PostajobComponent,
    MessagesComponent,
    RHeaderComponent,
    RFooterComponent,
    RcdashComponent,
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecruiterModule { }
