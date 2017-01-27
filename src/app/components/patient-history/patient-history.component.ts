import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {UserModel} from "../../models/user-model";


@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  userModel: UserModel = new UserModel();


  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
  }

}
