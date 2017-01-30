import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {UserModel} from "../../models/user-model";

@Component({
    selector: 'app-patient-timeline',
    templateUrl: './patient-timeline.component.html',
    styleUrls: ['./patient-timeline.component.css']
})
export class PatientTimelineComponent implements OnInit {
  userModel: UserModel = new UserModel();


  constructor(private patientService: PatientService) {

    }

    ngOnInit() {
    }
}
