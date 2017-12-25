import { Injectable } from '@angular/core';
import {Book} from "../shared/models/book";
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetBbokListService {

  constructor(private http: Http) { }

  getBookList(){
    let url = "http://localhost:8181/book/bookList";
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url,{headers: headers});
  }

  deleteBook(bookId: number){
    let url = "http://localhost:8181/book/remove";

    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, bookId, {headers: headers});
  }



}
