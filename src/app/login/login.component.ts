import { Component, OnInit } from '@angular/core';

import { BackConnService } from 'src/app/back-conn.service'
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  authorizedUser: boolean = false;

  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
    this.service.setLoggedIn(false);
    console.log("false")
  }

  login(): void {
    this.service.login(this.username, this.password).subscribe(response => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate([""]);   
        this.service.setLoggedIn(true);  
    },
    (error: HttpErrorResponse) => {
      this.router.navigate(["login"]);
    });
  }
}
