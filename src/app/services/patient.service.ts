import {Injectable} from '@angular/core';
import {Headers, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import * as moment from 'moment'
import {UserModel} from "../models/user-model";


@Injectable()
export class PatientService {
  userModel: UserModel = new UserModel();

  private baseUrl = "https://rest.ehrscape.com/rest/v1";
  private ehrId = "6f81d77a-26ef-4cf4-926f-40ccfafd8a1f";
  private authorization = "Basic " + btoa("guidemo" + ":" + "gui?!demo123");
  private getHeaders: Headers = new Headers({'Authorization': this.authorization,'Content-Type': 'application/json'});

  patientDemographics: any = [];
  bloodPressure: any = [];
  weight: any = [];
  height: any = [];
  allergy: any = [];
  body_temperature: any = [];
  labs: any = [];
  medication: any = [];
  problem: any = [];
  pulse: any = [];
  spO2: any = [];
  template: any = [];
  presentation: any = [];

  constructor(private http: Http,) {
    this.getData();
  }

  getData() {
    this.fetch(`/demographics/ehr/${this.ehrId}/party`).subscribe(
      data => {
        this.patientDemographics = data.party;
        console.log(data.party, 'demographics');
        this.userModel.firstNames = this.patientDemographics.firstNames + " ";
        this.userModel.lastNames = this.patientDemographics.lastNames;
        this.userModel.age = moment().diff(this.patientDemographics.dateOfBirth, 'year', true);
        this.userModel.gender = this.patientDemographics.gender;
        this.userModel.dateOfBirth = this.patientDemographics.dateOfBirth;
        // this.userModel.address = this.patientDemographics.address.address;
      }
    );
    this.fetch(`/view/${this.ehrId}/blood_pressure`).subscribe(
      data => {
        this.bloodPressure = data;
        console.log(this.bloodPressure, 'blood_pressure');
      }
    );
    this.fetch(`/view/${this.ehrId}/weight`).subscribe(
      data => {
        this.weight = data;
        console.log(this.weight, 'weight');
      }
    );
    this.fetch(`/view/${this.ehrId}/height`).subscribe(
      data => {
        this.height = data;
        console.log(this.height, 'height');
      }
    );
    this.fetch(`/view/${this.ehrId}/allergy`).subscribe(
      data => {
        this.allergy = data;
        console.log(this.allergy, 'allergy');
      }
    );
    this.fetch(`/view/${this.ehrId}/body_temperature`).subscribe(
      data => {
        this.body_temperature = data;
        console.log(this.body_temperature, 'body_temperature');
      }
    );
    this.fetch(`/view/${this.ehrId}/labs`).subscribe(
      data => {
        this.labs = data;
        console.log(this.labs, 'labs');
      }
    );
    this.fetch(`/view/${this.ehrId}/medication`).subscribe(
      data => {
        this.medication = data;
        console.log(this.medication, 'medication');
      }
    );
    this.fetch(`/view/${this.ehrId}/problem`).subscribe(
      data => {
        this.problem = data;
        console.log(this.problem, 'problem');
      }
    );
    this.fetch(`/view/${this.ehrId}/pulse`).subscribe(
      data => {
        this.pulse = data;
        console.log(this.pulse, 'pulse');
      }
    );
    this.fetch(`/view/${this.ehrId}/spO2`).subscribe(
      data => {
        this.spO2 = data;
        console.log(this.spO2, 'spO2');
      }
    );
    this.fetch(`/template`).subscribe(
      data => {
        this.template = data.templates;
        console.log(this.template, 'template');
      }
    );
    this.timeLine(`/presentation`).subscribe(
      data => {
        this.presentation = data;
        console.log(this.presentation, 'presentation');
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
