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
    private getHeaders: Headers = new Headers({'Authorization': this.authorization});

    patientDemographics: any = [];
    bloodPressure: any = [];
    weight: any = [];
    height: any = [];

    // age: any;
    // gender: any;
    // address: any;
    // dateOfBirth: any;

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
                this.userModel.address = this.patientDemographics.dateOfBirth;
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
                console.log(this.bloodPressure, 'weight');
            }
        );
        this.fetch(`/view/${this.ehrId}/height`).subscribe(
            data => {
                this.height = data;
                console.log(this.bloodPressure, 'height');
            }
        );
    }

    fetch(url) {
        return this.http.get(this.baseUrl + url, {headers: this.getHeaders})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

}
