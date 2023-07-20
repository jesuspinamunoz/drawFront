import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';


interface userNetMoney {
  LeagueName: string;
  date_xAxis: any[];
  netMoney_yAxis: any[];
}

@Component({
  selector: 'app-leaguesummary',
  templateUrl: './leaguesummary.component.html',
  styleUrls: ['./leaguesummary.component.css']
})
export class LeaguesummaryComponent implements OnInit {
  
  
  selectedLeague: any;
  userNetMoneySelectedObject: any;
  leagueName: any;
  display = false;  
  league: string = '';
  leagueStats: boolean = true;
  teamsStats: boolean = false;
  weekStats: boolean = false;
  resultado: boolean = false;
  info: any;
  isChecked: boolean = true;
  isBettingRecommended: boolean = true;
  leagueNames: string[] = []

  constructor(private route: ActivatedRoute, private service: BackConnService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.leagueName = params.get('data') as string;
      this.league = this.leagueName;
      console.log(this.league)
      this.service.getleagueNames().subscribe(response => {
        this.leagueNames = response.leagueNames;        
      });

      this.service.getLeagueSummary(this.leagueName).subscribe(response => {
        this.selectedLeague = response[this.leagueName];
        this.userNetMoneySelectedObject = response.userNetMoney.find((objeto: userNetMoney) => objeto.LeagueName === this.leagueName)
        this.info = response.info;
        this.isChecked = this.info.bet;
        this.isBettingRecommended = this.info.isBettingRecommended;
      })        
    });
  }

  updateCVSs(): void {
    const el = document.getElementById('loader');
    const hole = document.getElementById('holeModal');
    if (el != null && hole != null) {
      // ✅ Shows element if hidden
      el.style.display = 'block';
      // ✅ Shows element if hidden
      hole.style.filter = "grayscale(100%)";
      hole.style.opacity = "0.3";
    }
  }

  compareYears() {
    this.display = !this.display;
  }

  onSelected(value: string): void {
    console.log(value);
    this.league = value;
    this.router.navigate(["leagueSummary", { data: value }]);
  }

  onSelectedSeason(value: string): void {
    // if (value.includes('2023-2024')) {
    //   this.router.navigate(["leagueSummary", { data: this.league }]);
    // }
    // else {
      console.log(this.league);
      this.service.netIncomeSelectedYear(value + "/" + this.league).subscribe(response => {
        console.log(response);
            this.selectedLeague = response.seasonYear;
            console.log(this.selectedLeague)
            this.userNetMoneySelectedObject = response.userNetMoney.find((objeto: userNetMoney) => objeto.LeagueName === this.leagueName)
            console.log(this.userNetMoneySelectedObject)
            this.info = response.info;
            this.isChecked = this.info.bet;
            this.isBettingRecommended = this.info.isBettingRecommended;
            // this.router.navigate(["leagueSummary", { data: value }]);
      },
            (error: HttpErrorResponse) => {
              const statusCode = error.status;
              this.router.navigate(["login"]);
            })
    // }
  }

  showLeagueStats(){
    this.teamsStats = false;
    this.leagueStats = true;
    this.weekStats = false;
    this.resultado = false;
  }
  showTeamStats(){
    this.teamsStats = true;
    this.leagueStats = false;
    this.weekStats = false;
    this.resultado = false;
  }
  showWeekStats(){
    this.teamsStats = false;
    this.leagueStats = false;
    this.weekStats = true;
    this.resultado = false;
  }

  showResultados(){
    this.teamsStats = false;
    this.leagueStats = false;
    this.weekStats = false;
    this.resultado = true;
  }

}
