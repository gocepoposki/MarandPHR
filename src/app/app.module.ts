import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import { PatientStatusComponent } from './components/patient-status/patient-status.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PatientTimelineComponent } from './components/patient-timeline/patient-timeline.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientStatusComponent,
    PatientInfoComponent,
    PatientTimelineComponent,
    PatientHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
