import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {UserModel} from "../../models/user-model";

@Component({
  selector: 'app-patient-timeline',
  templateUrl: './patient-timeline.component.html',
  styleUrls: ['./patient-timeline.component.css'],

})
export class PatientTimelineComponent implements OnInit, AfterViewInit {
  userModel: UserModel = new UserModel();


  constructor(private patientService: PatientService) {

  }

  ok:boolean;
  bloodPressureDiastolic: any = [];
  bloodPressureSystolic: any = [];
  bloodPressureTime: any = [];

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };








}
