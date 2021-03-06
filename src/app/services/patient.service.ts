import {Injectable} from '@angular/core';
import {Headers, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user-model";

@Injectable()
export class PatientService{

  userModel: UserModel = new UserModel();

  private baseUrl = "https://rest.ehrscape.com";
  private ehrId = "6f81d77a-26ef-4cf4-926f-40ccfafd8a1f";
  private authorization = "Basic " + btoa("guidemo" + ":" + "gui?!demo123");
  private getHeaders: Headers = new Headers({'Authorization': this.authorization,'Content-Type': 'application/json'});

  patientDemographics: any = [];
  bloodPressure: any = [];
  bloodPressureTime: any = [];
  bloodPressureData: any = [];
  weight: any = [];
  weightTime: any = [];
  weightData: any = [];
  height: any = [];
  heightTime: any = [];
  heightData: any = [];
  allergy: any = [];
  bodyTemperature: any = [];
  bodyTemperatureTime: any = [];
  bodyTemperatureData: any = [];
  labs: any = [];
  medication: any = [];
  problem: any = [];
  pulse: any = [];
  pulseTime: any = [];
  pulseData: any = [];
  spO2: any = [];
  template: any = [];
  presentation: any = [];
  bmi: any = [];

  constructor(private http: Http) {
    this.getData();
  }

  getData() {
    this.fetch(`/rest/v1/demographics/ehr/${this.ehrId}/party`).subscribe(
      data => {
        this.patientDemographics = data.party;
        console.log(data.party, 'demographics');
        this.userModel.firstNames = this.patientDemographics.firstNames + " ";
        this.userModel.lastNames = this.patientDemographics.lastNames;
        this.userModel.age = moment().diff(this.patientDemographics.dateOfBirth, 'year', false);
        this.userModel.month = moment().diff(this.patientDemographics.dateOfBirth, 'month', false)%12;
        this.userModel.fullAge = moment().preciseDiff(this.patientDemographics.dateOfBirth);
        this.userModel.gender = this.patientDemographics.gender;
        this.userModel.dateOfBirth = this.patientDemographics.dateOfBirth;
        // this.userModel.address = this.patientDemographics.address.address;
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/blood_pressure`).subscribe(
      data => {
        this.bloodPressure = data;
        console.log(this.bloodPressure, 'blood_pressure');
        // this.bloodPressureDiastolic = data.map(function(a) {return a.diastolic;});
        // this.bloodPressureSystolic = data.map(function(a) {return a.systolic;});
        this.bloodPressureTime =  data.map(function(a) {return moment(a.time).format('DD-MMM');}).reverse();
        this.bloodPressureData = [
          {data: data.map(function(a) {return a.diastolic;}).reverse(), label: 'Diastolic', lineTension: 0},
          {data: data.map(function(a) {return a.systolic;}).reverse(), label: 'Systolic', lineTension: 0}
        ];
        // console.log(this.bloodPressureTime + 'perooo')

      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/weight`).subscribe(
      data => {
        this.weight = data;
        this.weightTime =  data.map(function(a) {return moment(a.time).format('DD-MMM');}).reverse();
        this.weightData = [
          {data: data.map(function(a) {return a.weight;}).reverse(), label: 'Weight', lineTension: 0},
        ];
        // console.log(this.weight, 'weight');
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/height`).subscribe(
      data => {
        this.height = data;
        this.heightTime =  data.map(function(a) {return moment(a.time).format('DD-MMM');}).reverse();
        this.heightData = [
          {data: data.map(function(a) {return a.height;}).reverse(), label: 'Height'},
        ];

        // console.log(this.height, 'height');
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/allergy`).subscribe(
      data => {
        this.allergy = data;
        // console.log(this.allergy, 'allergy');
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/body_temperature`).subscribe(
      data => {
        this.bodyTemperature = data;
        console.log(this.bodyTemperature, 'body_temperature');
        this.bodyTemperatureData = [
          {data: data.map(function(a) {return a.temperature;}).reverse(), label: 'Body Temperature'},
        ];
        this.bodyTemperatureTime = data.map(function(a) {return moment(a.time).format('DD-MMM');}).reverse();
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/labs`).subscribe(
      data => {
        this.labs = data;
        // console.log(this.labs, 'labs');
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/medication`).subscribe(
      data => {
        this.medication = data;
        console.log(this.medication, 'medication');
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/problem`).subscribe(
      data => {
        this.problem = data;
        // console.log(this.problem, 'problem');
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/pulse`).subscribe(
      data => {
        this.pulse = data;
        this.pulseTime =  data.map(function(a) {return moment(a.time).format('DD-MMM');}).reverse();
        this.pulseData = [
          {data: data.map(function(a) {return a.pulse;}).reverse(), label: 'Pulse', lineTension: 0},
        ];
        // console.log(this.pulse, 'pulse');
      }
    );
    this.fetch(`/rest/v1/view/${this.ehrId}/spO2`).subscribe(
      data => {
        this.spO2 = data;
        // console.log(this.spO2, 'spO2');
      }
    );
    this.fetch(`/rest/v1/template`).subscribe(
      data => {
        this.template = data.templates;
        // console.log(this.template, 'template');
      }
    );
    this.timeLine(`/rest/v1/presentation`).subscribe(
      data => {
        this.presentation = data;
        console.log(this.presentation, 'presentation');
      }
    );
    this.timeLine(`/thinkcds/rest/v1/guide/BMI.Calculation.v.1/execute/6f81d77a-26ef-4cf4-926f-40ccfafd8a1f/query?format=plain`).subscribe(
      data => {
        this.bmi = data[0].results;
         // console.log(this.bmi, 'bmi');
      }
    );

  }

  fetch(url) {
    return this.http.get(this.baseUrl + url, {headers: this.getHeaders})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  timeLine(url){
    var body = JSON.stringify({
      "queryRequestData":{"aql":`SELECT c FROM EHR[ehr_id/value='${this.ehrId}'] CONTAINS COMPOSITION c ORDER BY c/context/start_time DESC FETCH 20`}
    });
    // return this.http.post(this.baseUrl + url, {headers: this.getHeaders})
    return this.http.post(this.baseUrl + url, body, {headers: this.getHeaders})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
declare let moment: any;
