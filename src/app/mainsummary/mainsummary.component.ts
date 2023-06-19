import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { BackConnService } from 'src/app/back-conn.service'
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
  leagues: { [clave: string]: any } = {};
  alerts: string[] = [];
  userNetMoney: any;
  alertShown: boolean = false;
  selectedLeague: any;
  userNetMoneySelectedObject: any;
  showInfoLeague = false;
  display = false;


  sortedData: any;
  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
    this.goToMainPage()
  }

  goToMainPage() {
    this.league = 'SP1';
    this.service.getIncomeValues().subscribe(response => {
      console.log(response);
      this.responseJson = response;
      this.leagues['SP1'] = response.España;
      this.leagues['SP2'] = response.España2;
      this.leagues['ROU'] = response.Rumania;
      this.leagues['POL'] = response.Polonia;
      this.leagues['P1'] = response.Portugal;
      this.leagues['G1'] = response.Grecia;
      this.leagues['HUN'] = response.Hungria;
      this.leagues['COL'] = response.Colombia;
      this.leagues['CHIL'] = response.Chile;
      this.leagues['CROA'] = response.Eslovenia;
      this.leagues['ESLOVENIA'] = response.Paraguay;
      this.leagues['PAR'] = response.Croatia;
      this.leagues['LETONIA'] = response.Letonia;
      this.leagues['SERBIA'] = response.Uruguay;
      this.leagues['AUSTRALIA'] = response.Serbia;
      this.leagues['BULGARIA'] = response.Australia;
      this.leagues['GIBRALTAR'] = response.Bulgaria;
      this.leagues['AZERBAIYAN'] = response.Gibraltar;
      this.leagues['HONGKONG'] = response.Azerbaiyan;
      this.leagues['INDIA'] = response.Hongkong;
      this.leagues['PERU'] = response.India;
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

  onSelected(value: string): void {
    //restart selected year to 2022-2023
    const select = document.getElementById('selectSeason') as HTMLSelectElement | null;
    if (select != null) {
      select.selectedIndex = 0;
    }
    // get the json league for the selected league from selector
    this.league = value;
    this.selectedLeague = this.leagues[value];
    this.userNetMoneySelectedObject = this.userNetMoney.find((objeto: userNetMoney) => objeto.LeagueID === value);
    this.showInfoLeague = true;
  }

  onSelectedSeason(value: string): void {
    if (value.includes('2022-2023')) {
      this.onSelected(this.league);
    }
    else {
      this.service.netIncomeSelectedYear(value + "/" + this.league).subscribe(response => {
        this.selectedLeague = response.seasonYear;
        console.log(response.seasonYear)
      },
        (error: HttpErrorResponse) => {
          const statusCode = error.status;
          this.service.setLoggedIn(false);
          this.router.navigate(["login"]);
        })
    }
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

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(["login"]);
  }

  ngOnChanges() {
    if (this.responseJson) {
      const keys = Object.keys(this.responseJson);
      console.log(keys);

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

  compareYears() {
    this.display = !this.display;
  }

  personalData(){
    this.service.getMyPersonalData().subscribe(response => {console.log(response), this.router.navigate(["personalData"])});
  }


}
