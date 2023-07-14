import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service'
import { HttpErrorResponse } from '@angular/common/http';
import { constants } from 'src/app/constants';

document.documentElement.style.setProperty('--navMenuWidth', constants.navMenuWidth);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalProfit:number = 0;
  objetivo:number = 0;


  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {

    this.service.getNavBarInfo().subscribe(response => {
      this.totalProfit = response.TotalProfit;       
      this.objetivo = response.Objetivo;  
  
    })
  }

  ngOnChanges() {
  }

  onSelected(value: string): void {
    this.router.navigate(["leagueSummary", { data: value }]);
  }

  userInfo():void{
      this.router.navigate(["personalData"]);
  }

  mainSummary():void{    
    this.router.navigate([""]);
  }

  tipsterMode():void{    
    this.router.navigate(["tipstermode"]);
  }

  goToAlertedLeagues(){    
    this.router.navigate(["alertedLeagues"]);
  }

  goToActiveBetLeagues()
  {
    this.router.navigate(["activeBetLeagues"]);
  }

  
}
