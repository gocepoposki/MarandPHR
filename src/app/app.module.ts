import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AuthService} from "./services/auth.service";
import {PatientStatusComponent} from './components/patient-status/patient-status.component';
import {PatientInfoComponent} from './components/patient-info/patient-info.component';
import {PatientTimelineComponent} from './components/patient-timeline/patient-timeline.component';
import {PatientHistoryComponent} from './components/patient-history/patient-history.component';
import {PatientService} from "./services/patient.service";
import {ChartsModule} from "ng2-charts";
import { PatientCompositionItemComponent } from './components/patient-composition-item/patient-composition-item.component';
import { PatientPresentationItemComponent } from './components/patient-presentation-item/patient-presentation-item.component';
import {Draggable} from "ng2draggable/draggable.directive";



@NgModule({
  declarations: [
    AppComponent,
    PatientStatusComponent,
    PatientInfoComponent,
    PatientTimelineComponent,
    PatientHistoryComponent,
    PatientCompositionItemComponent,
    PatientPresentationItemComponent,
    Draggable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
  ],
  providers: [
    AuthService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
