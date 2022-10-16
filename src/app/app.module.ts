import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { SelectorComponent } from './home/selector/selector.component';
import { AboutComponent } from './about/about.component';
import { NgToastModule } from 'ng-angular-popup';
import { AuthGuard } from './auth.guard';
import { JobseekerModule } from './jobseeker/jobseeker.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectorComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgToastModule,
    JobseekerModule
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
