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

  leaguesDrawPercentaje: { [key: string]: number }[] = [];
  sortedLeaguesDrawPercentaje: { [key: string]: number } = {};
  leaguesNoDrawStreak: { [key: string]: number }[] = [];
  sortedLeaguesNoDrawStreak: { [key: string]: number } = {};
  leaguesNetIncome: { [key: string]: number }[] = [];
  sortedLeaguesNetIncome: { [key: string]: number } = {};

  league: string = '';
  responseJson: any;
  alerts: string[] = [];
  userNetMoney: any;
  alertShown: boolean = false;
  selectedLeague: any;
  userNetMoneySelectedObject: any;
  showInfoLeague = false;

  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
    this.goToMainPage()
  }

  goToMainPage() {
    this.service.getMainSummary().subscribe(response => {
      this.responseJson = response;
      this.alerts = response.alert;
      this.userNetMoney = response.userNetMoney;

      this.userNetMoneySelectedObject = response.userNetMoney.find((objeto: userNetMoney) => objeto.LeagueID === 'allLeagues')

      if (!this.alertShown) {
        for (var alerting of this.alerts) {
          alert("NO Draws: " + alerting);
        }
        this.alertShown = true;
      }
      // this.onSelected("SP1");
      this.ngOnChanges();
    },
      (error: HttpErrorResponse) => {
        const statusCode = error.status;
        this.service.setLoggedIn(false);
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

  
  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(["login"]);
  }

  ngOnChanges() {
    if (this.responseJson) {
      const keys = Object.keys(this.responseJson);

      // Evitar leer dos keys que no son ligas como 'Alert' y 'userNetMoney'
      for (let i = 0; i < keys.length - 2; i++) {
        const leaguesDrawPercentajeDict: { [key: string]: number } = {};
        const leaguesNoDrawStreakDict: { [key: string]: number } = {};

        const key = keys[i];
        const value = this.responseJson[key];

        leaguesDrawPercentajeDict[key] = value.weekDayInfo.Total;
        leaguesNoDrawStreakDict[key] = value.noDrawStreak;

        this.leaguesDrawPercentaje.push(leaguesDrawPercentajeDict);
        this.leaguesNoDrawStreak.push(leaguesNoDrawStreakDict);
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

      this.leaguesDrawPercentaje.sort((a, b) => {
        const valueA = Object.values(a)[0]; // Obtener el valor del primer par clave-valor en a
        const valueB = Object.values(b)[0]; // Obtener el valor del primer par clave-valor en b
        return valueB - valueA;
      });
      this.leaguesNoDrawStreak.sort((a, b) => {
        const valueA = Object.values(a)[0]; // Obtener el valor del primer par clave-valor en a
        const valueB = Object.values(b)[0]; // Obtener el valor del primer par clave-valor en b
        return valueB - valueA;
      });
      this.leaguesNetIncome.sort((a, b) => {
        const valueA = Object.values(a)[0]; // Obtener el valor del primer par clave-valor en a
        const valueB = Object.values(b)[0]; // Obtener el valor del primer par clave-valor en b
        return valueB - valueA;
      });
    }
  }

  getKey(obj: any): string {
    return Object.keys(obj)[0];
  }

  getValue(obj: any): any {
    const key = Object.keys(obj)[0];
    return obj[key];
  }

  personalData(): void{
    this.router.navigate(["personalData"]);
  }
  
}
