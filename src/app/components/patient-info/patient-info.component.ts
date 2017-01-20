import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    // this.login();
  }

  demographics(){
    this.patientService.patientLogin().subscribe(
        data=>{console.log(data)}
    )

  }
}
