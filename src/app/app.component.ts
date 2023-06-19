import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import {DOCUMENT} from '@angular/common';

import { __exportStar } from 'tslib';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testchart';
  // arr: string[] = [];
  // arrn: number[] = [];
  // arr2: string[] = [];
  // arrn2: number[] = [];
  // arr3: string[] = [];
  // arrn3: number[] = [];
  // chart: any = {};
  // chart2: any = {};
  // chart3: any = {};
  // martingala: number[] = [];
  // noDrawStreak: number = 0;
  // year: string = '';
  // lastUpdateDate: string = '';
  // lastUpdateMatch: string = '';
  // hasPreviousYearData: number[] = [];
  // selectedLeagueSeason:any;
  // userNetMoneySingleLeague: string[] = [];
  
  

  // seasonYear: any;
  // isLogged = false;
  // sessionId: string = ''; 


  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document, public authGuard: AuthGuard, private router:Router) { }
  ngOnInit(): void {
    // const cookieData = this.getCookieData();
    // this.isLogged = cookieData.isLoggedIn;
    // this.accessToken = cookieData.accessToken;
    
    // this.service.isLoggedSubject.subscribe((isLogged: boolean) => {
    //   if (isLogged) {
    //     this.isLogged = true;        
    //     this.accessToken = this.service.getAccessToken(); // Reemplaza 'el-access-token' con el valor real del accessToken
    //     localStorage.setItem('token', this.accessToken);
    //     this.service.setAccessToken(this.accessToken);
    //     this.setCookieData({ isLoggedIn: isLogged, accessToken: this.accessToken});
    //     this.goToMainPage();
    //   }
    //   else if (!isLogged) {
    //     this.isLogged = false;
    //     this.deleteCookieData();
    //   }
    // });

    // if(this.isLogged)
    // {
    //   this.goToMainPage();
    // }
    // else
    // {
    //   console.log("app navigate login");
    //   this.router.navigate(["/login"])
    // }
  }
}
