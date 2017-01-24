import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {UserModel} from "../../models/user-model";
import * as moment from 'moment'
@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit { userModel: UserModel = new UserModel();

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.demographics();
  }

  PatientInfo(){
    this.userModel.firstName = this.userModel.patientInfo.firstNames + " ";
    this.userModel.lastName = this.userModel.patientInfo.lastNames;
    this.userModel.age = moment().diff(this.userModel.patientInfo.dateOfBirth, 'year', true);
    this.userModel.gender = this.userModel.patientInfo.gender;
    this.userModel.dateOfBirth = this.userModel.patientInfo.dateOfBirth;
    this.userModel.address =this.userModel.patientInfo.dateOfBirth;
  }


  demographics() {
    this.patientService.patientDemographics();
    this.patientService.patientLogin().subscribe(
      data => {
        console.log(data);
        this.userModel.patientInfo = data.party;
        this.PatientInfo();
      }
    );
  }
}
