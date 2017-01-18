import { Injectable } from '@angular/core';
import {UserModel} from "../models/user-model";
import {Headers, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class UserService {
  private baseUrl = "https://rest.ehrscape.com/rest/v1/view/6f81d77a-26ef-4cf4-926f-40ccfafd8a1f/body_temperature";
  private ehrId = "6f81d77a-26ef-4cf4-926f-40ccfafd8a1f";

  user: UserModel = new UserModel();
  authorization = "Basic " + btoa("guidemo" + ":" + "gui?!demo123");
  getHeaders: Headers = new Headers({'Authorization': this.authorization});

  constructor(private http: Http, _authService: AuthService) { }

  userLogin() {
    return this.http.get(this.baseUrl , {headers: this.getHeaders})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  //
  // userRegister(ime: string, username: string, password: string, email: string) {
  //   var body = JSON.stringify({
  //     "Ime": ime,
  //     "username": username,
  //     "password": password,
  //     "email": email
  //   });
  //   return this.http.post(`${this.serverUrl}/user`, body, {headers: this.postHeaders})
  //     .map((res: Response) => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  // }
}
