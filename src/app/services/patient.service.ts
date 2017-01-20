import { Injectable } from '@angular/core';
import {Headers, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable()
export class PatientService {
  private baseUrl = "https://rest.ehrscape.com/rest/v1";
  private ehrId = "6f81d77a-26ef-4cf4-926f-40ccfafd8a1f";
  private authorization = "Basic " + btoa("guidemo" + ":" + "gui?!demo123");
  getHeaders: Headers = new Headers({'Authorization': this.authorization});

  resurseUrl: string;
  fullUrl: string;




  constructor(private http: Http, _authService: AuthService) { }

  patientLogin() {
    this.fullUrl = this.baseUrl+this.resurseUrl;
    return this.http.get(this.fullUrl , {headers: this.getHeaders})
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  patientDemographics(){
    this.resurseUrl="/demographics/ehr/"+ this.ehrId +"/party";
    this.patientLogin();
  }


}
