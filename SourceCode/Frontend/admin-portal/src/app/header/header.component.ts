import { Component, OnInit } from '@angular/core';
import {AuthService} from "../authentication/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private loggedIn: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkSession().subscribe(
      response => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

  showAll(){
    this.loggedIn = !this.loggedIn;
  }

  logout(){
    this.authService.logout().subscribe(
      response => {
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
