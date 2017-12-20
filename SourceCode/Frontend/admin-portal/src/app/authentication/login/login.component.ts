import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username': '' , 'password': ''};
  private loggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.sendCredential(this.credential.username, this.credential.password).subscribe(
      response => {
          console.log(response);
          localStorage.setItem("xAuthToken", response.json().token);
          this.loggedIn = true;
          /*location.reload();*/
      },
      error => {
        console.log(error);
      }
    );
  }

}
