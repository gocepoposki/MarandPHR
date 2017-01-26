import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/user-model";
import {PatientService} from "../../services/patient.service";


@Component({
  selector: 'app-patient-status',
  templateUrl: './patient-status.component.html',
  styleUrls: ['./patient-status.component.css']
})
export class PatientStatusComponent implements OnInit {
  userModel: UserModel = new UserModel();

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {

  }

}
