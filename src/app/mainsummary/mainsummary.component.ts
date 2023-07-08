import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BackConnService } from 'src/app/back-conn.service';
import zoomPlugin from 'chartjs-plugin-zoom';
import Chart from 'chart.js/auto/auto.mjs';
import { Router } from '@angular/router';


interface userNetMoney {
  LeagueID: string;
  date_xAxis: any[];
  netMoney_yAxis: any[];
}


@Component({
  selector: 'app-mainsummary',
  templateUrl: './mainsummary.component.html',
  styleUrls: ['./mainsummary.component.css']
})
export class MainsummaryComponent implements OnInit {

  // leaguesDrawPercentaje: { [key: string]: number }[] = [];
  sortedLeaguesDrawPercentaje: { [key: string]: number } = {};
  // leaguesNoDrawStreak: { [key: string]: number }[] = [];
  sortedLeaguesNoDrawStreak: { [key: string]: number } = {};
  leaguesNetIncome: any[] = [];
  sortedLeaguesNetIncome: { [key: string]: number } = {};

  league: string = '';
  responseJson: any;
  alerts: string[] = [];
  userNetMoney: any;
  alertShown: boolean = false;
  selectedLeague: any;
  userNetMoneySelectedObject: any;
  showInfoLeague = false;

  totalProfit: boolean = true;
  leagueStats: boolean = false;
  // currentStrike:boolean = false;
  // leagueProfit:boolean = false;

  leaguesNoDrawStreakDict: { [key: string]: number } = {};
  leaguesDrawPercentajeDict: { [key: string]: number } = {};

  sortedByLiga: boolean = true;
  sortedByProfit: boolean = true;  
  sortedByCurrentStrike: boolean = true;
  sortedByDrawPercentage: boolean = true;
  
  userTotalProfit: any;

  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
    this.service.setLoggedIn(true);
    this.goToMainPage()
  }

  goToMainPage() {
    this.service.getMainSummary().subscribe(response => {
      this.responseJson = response;
      this.alerts = response.alert;
      this.userNetMoney = response.userNetMoney;
      this.userNetMoneySelectedObject = response.userNetMoney.find((objeto: userNetMoney) => objeto.LeagueID === 'allLeagues');
      this.userTotalProfit = response.TotalProfit;
      this.ngOnChanges();
    },
      (error: HttpErrorResponse) => {
        const statusCode = error.status;
        this.router.navigate(["login"]);
      }
    );

    Chart.register(zoomPlugin);

    const hole = document.getElementById('holeModal');
    const el = document.getElementById('loader');
    if (el != null && hole != null) {
      // ✅ Hides element if shown
      el.style.display = 'none';
      // ✅ Shows element if hidden
      hole.style.display = 'block';
    }
    this.ngOnChanges();
  }

  ngOnChanges() {
    if (this.responseJson) {

      // Evitar leer dos keys que no son ligas como 'Alert' y 'userNetMoney', 'AlertDict'
      for (const league in this.responseJson) {
        if(this.responseJson[league].weekDayInfo)
        {
          this.leaguesDrawPercentajeDict[league] = this.responseJson[league].weekDayInfo.Total;
          this.leaguesNoDrawStreakDict[league] = this.responseJson[league].noDrawStreak;
        }
      }

      const usersNetMoney = this.responseJson["userNetMoney"];

      for (const item in usersNetMoney) {
        const object = usersNetMoney[item];
        if (object.LeagueID != "allLeagues") {
          const leaguesNetIncomeDict: { [key: string]: number } = {};
          const leagueNetMoneyArray = object.IncomeChart_netMoney_yAxis;
          if (leagueNetMoneyArray.length == 0) {
            leaguesNetIncomeDict[object.LeagueName] = 0;
          }
          else {
            leaguesNetIncomeDict[object.LeagueName] = object.IncomeChart_netMoney_yAxis[leagueNetMoneyArray.length - 1];
          }
          this.leaguesNetIncome.push(leaguesNetIncomeDict)
        }
      }

      this.sortTableByProfit();
    }
  }

  getKey(obj: any): string {
    return Object.keys(obj)[0];
  }

  getValue(obj: any): any {
    const key = Object.keys(obj)[0];
    return obj[key];
  }

  showTotalProfit() {
    this.totalProfit = true;
    this.leagueStats = false;
  }

  showLeagueProfit() {
    this.totalProfit = false;
    this.leagueStats = true;
  }

  returnZero() {
    return 0
  }

  sortTableByLiga() {
    this.sortedByLiga = !this.sortedByLiga;
    this.leaguesNetIncome.sort((a, b) => {
      const ligaA = this.getKey(a).toLowerCase();
      const ligaB = this.getKey(b).toLowerCase();
      if (this.sortedByLiga) {
        if (ligaA < ligaB) {
          return -1;
        }
        if (ligaA > ligaB) {
          return 1;
        }
      }
      else {
        if (ligaA < ligaB) {
          return 1;
        }
        if (ligaA > ligaB) {
          return -1;
        }
      }
      return 0;
    });
  }


  sortTableByProfit() {
    this.sortedByProfit = !this.sortedByProfit;

    this.leaguesNetIncome.sort((a, b) => {
      const ligaA = this.getValue(a);
      const ligaB = this.getValue(b);
      if (this.sortedByProfit) {
        if (ligaA < ligaB) {
          return -1;
        }
        if (ligaA > ligaB) {
          return 1;
        }
      }
      else {
        if (ligaA < ligaB) {
          return 1;
        }
        if (ligaA > ligaB) {
          return -1;
        }
      }
      return 0;
    });
  }

  sortTableByCurrentStrike() {
    this.sortedByCurrentStrike = !this.sortedByCurrentStrike;

    this.leaguesNetIncome.sort((a, b) => {
      const ligaA = this.leaguesNoDrawStreakDict[this.getKey(a)];
      const ligaB = this.leaguesNoDrawStreakDict[this.getKey(b)];
      if (this.sortedByCurrentStrike) {
        if (ligaA < ligaB) {
          return -1;
        }
        if (ligaA > ligaB) {
          return 1;
        }
      }
      else {
        if (ligaA < ligaB) {
          return 1;
        }
        if (ligaA > ligaB) {
          return -1;
        }
      }
      return 0;
    });
  }

  sortTableByDrawPercentaje() {
    this.sortedByDrawPercentage = !this.sortedByDrawPercentage;

    this.leaguesNetIncome.sort((a, b) => {
      const ligaA = this.leaguesDrawPercentajeDict[this.getKey(a)];
      const ligaB = this.leaguesDrawPercentajeDict[this.getKey(b)];
      if (this.sortedByDrawPercentage) {
        if (ligaA < ligaB) {
          return -1;
        }
        if (ligaA > ligaB) {
          return 1;
        }
      }
      else {
        if (ligaA < ligaB) {
          return 1;
        }
        if (ligaA > ligaB) {
          return -1;
        }
      }
      return 0;
    });
  }

}
