import { Injectable } from '@angular/core';
import {Book} from "../../shared/models/book";
import {Headers, Http} from "@angular/http";

@Injectable()
export class EditBookService {

  constructor(private http: Http) { }

  sendBook(book: Book){
    let url = "http://localhost:8181/book/update";
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book),{headers: headers});
  }


}
