import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.css']
})
export class PersonaldataComponent implements OnInit {

  username:string = "";
  password:string = "";
  startbettingmoney:number = 0;
  telegramHash:string = "";
  objetivo:number = 0;
  expirationDate:string = "";

  showBettingShopSummaryBool:boolean = true;
  showWinamaxInfoBool:boolean = false;
  showBetFairInfoBool:boolean = false;
  showPersonalConfigurationBool:boolean = false;

  winamaxUser:string = "";
  winamaxPassword:string = "";

  constructor(private router: Router, private service: BackConnService) { }

  ngOnInit(): void {
  }
  updatePersonalData(): void {
    // this.service.updateMyPersonalData(this.username, this.password, this.startbettingmoney, this.telegramHash, this.objetivo).subscribe(response => { 
    //   this.router.navigate([""]);
    // })
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(["login"]);
  }

  showBettingShopSummary()
  {
    this.showBettingShopSummaryBool = true;
    this.showWinamaxInfoBool = false;
    this.showBetFairInfoBool = false;
    this.showPersonalConfigurationBool = false;
    // this.router.navigate(["bettingShopSummary"]);
  }
  showWinamaxInfo()
  {
    this.service.getBettingShopInfo('Winamax').subscribe(response => { 
      this.winamaxUser = response.username
      this.winamaxPassword = response.password
      
      this.showBettingShopSummaryBool = false;
      this.showWinamaxInfoBool = true;
      this.showBetFairInfoBool = false;
      this.showPersonalConfigurationBool = false;
    });
    
  }
  showBetFairInfo()
  {
    this.service.getBettingShopInfo('Betfair').subscribe(response => {
      this.winamaxUser = response.username;
      this.winamaxPassword = response.password;
      
      this.showBettingShopSummaryBool = false;
      this.showWinamaxInfoBool = false;
      this.showBetFairInfoBool = true;
      this.showPersonalConfigurationBool = false;
    });    
  }

  showPersonalConfiguration()
  {
    this.service.getUserConfigurationData().subscribe(response => {
      this.startbettingmoney = response.startbettingmoney;
      this.telegramHash = response.telegramHash;
      this.objetivo = response.objetivo;
      this.expirationDate = response.expirationDate;

      this.showBettingShopSummaryBool = false;
      this.showWinamaxInfoBool = false;
      this.showBetFairInfoBool = false;
      this.showPersonalConfigurationBool = true;
    });
  }

}
