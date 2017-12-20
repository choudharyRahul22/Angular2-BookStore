import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";




@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  sendCredential(username: string, password: string){
    let url = "http://localhost:8181/token";
    let encodedCredentials = btoa(username+":"+password);
    let basicHeader = "Basic "+ encodedCredentials;
    let headers = new Headers({
      "Content-Type" : "application/x-www-form-urlencoded",
      "Authorization" : basicHeader
    });

    return this.http.get(url, {headers: headers});

  }

}
