import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {UserModel} from "../../models/user-model";


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  userModel: UserModel = new UserModel();


  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
  }

}
