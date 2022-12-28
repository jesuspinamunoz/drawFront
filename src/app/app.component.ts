import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import {DOCUMENT} from '@angular/common';

import { BackConnService } from 'src/app/back-conn.service'
import Chart from 'chart.js/auto/auto.mjs';
import zoomPlugin from 'chartjs-plugin-zoom';
import { __exportStar } from 'tslib';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testchart';
  arr: string[] = [];
  arrn: number[] = [];
  arr2: string[] = [];
  arrn2: number[] = [];
  arr3: string[] = [];
  arrn3: number[] = [];
  chart: any = {};
  chart2: any = {};
  chart3: any = {};
  martingala: number[] = [];
  noDrawStreak: number = 0;
  league: string = '';
  year: string = '';
  lastUpdateDate: string = '';
  lastUpdateMatch: string = '';
  hasPreviousYearData: number[] = [];
  alerts: string[] = [];
  alertShown: boolean = false;
  selectedLeagueSeason:any;
  selectedLeague: any;


  spain: any;
  spain2: any;
  rumania: any;
  polonia: any;
  portugal: any;
  grecia: any;
  hungria: any;
  colombia: any;
  chile: any;
  eslovenia: any;
  paraguay: any;
  croatia: any;
  letonia: any;
  uruguay: any;
  serbia: any;
  australia: any;
  bulgaria: any;
  gibraltar: any;
  azerbaiyan: any;
  hongkong: any;
  india: any;
  seasonYear: any;



  display = false;

  constructor(private service: BackConnService,  private renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document, private cookieService: CookieService) { }
  ngOnInit(): void {
    this.league = 'SP1';
    this.service.getIncomeValues("2022-2023/SP1").subscribe(response => {
      this.alerts = response.alert;
      this.spain = response.spain;
      this.spain2 = response.spain2;
      this.rumania = response.rumania;
      this.polonia = response.polonia;
      this.portugal = response.portugal;
      this.grecia = response.grecia;
      this.hungria = response.hungria;
      this.colombia = response.colombia;
      this.chile = response.chile;
      this.eslovenia = response.eslovenia;
      this.paraguay = response.paraguay;
      this.croatia = response.croatia;
      this.letonia = response.letonia;
      this.uruguay = response.uruguay;
      this.serbia = response.serbia;
      this.australia = response.australia;
      this.bulgaria = response.bulgaria;
      this.gibraltar = response.gibraltar;
      this.azerbaiyan = response.azerbaiyan;      
      this.hongkong = response.hongkong;     
      this.india = response.india;
      

      if (!this.alertShown) {
        for (var alerting of this.alerts) {
          alert("NO Draws: " + alerting);
        }
        this.alertShown = true;
      }
      this.onSelected("2022-2023/SP1");
    });
    Chart.register(zoomPlugin);

    const hole = document.getElementById('holeModal');
    const el = document.getElementById('loader');
    if (el != null && hole != null) {
        // ✅ Hides element if shown
        el.style.display = 'none';
        // ✅ Shows element if hidden
        hole.style.display = 'block';
    }    
  }

  onSelected(value: string): void {
    console.log("--->>")
    console.log(value);
    //restart selected year to 2022-2023
    const select = document.getElementById('selectSeason') as HTMLSelectElement | null;
    if (select != null) {
      select.selectedIndex = 0;
    }

    // get the json league for the selected league from selector
    if (value == '2022-2023/SP1') {
      this.selectedLeague = this.spain;
      this.league = 'SP1';
    }
    else if (value == '2022-2023/SP2') {
      this.selectedLeague = this.spain2;
      this.league = 'SP2';
    }
    else if (value == '2022-2023/ROU') {
      this.selectedLeague = this.rumania;
      this.league = 'ROU';
    }
    else if (value == '2022-2023/POL') {
      this.selectedLeague = this.polonia;
      this.league = 'POL';
    }
    else if (value == '2022-2023/P1') {
      this.selectedLeague = this.portugal;
      this.league = 'P1';
    }
    else if (value == '2022-2023/G1') {
      this.selectedLeague = this.grecia;
      this.league = 'G1';
    }
    else if (value == '2022-2023/HUN') {
      this.selectedLeague = this.hungria;
      this.league = 'HUN';
    }
    else if (value == '2022-2023/COL') {
      this.selectedLeague = this.colombia;
      this.league = 'COL';
    }
    else if (value == '2022-2023/CHIL') {
      this.selectedLeague = this.chile;
      this.league = 'CHIL';
    }
    else if (value == '2022-2023/CROA') {
      this.selectedLeague = this.croatia;
      this.league = 'CROA';
    }
    else if (value == '2022-2023/ESLOVENIA') {
      this.selectedLeague = this.eslovenia;
      this.league = 'ESLOVENIA';
    }
    else if (value == '2022-2023/PAR') {
      this.selectedLeague = this.paraguay;
      this.league = 'PAR';
    }
    else if (value == '2022-2023/LETONIA') {
      this.selectedLeague = this.letonia;
      this.league = 'LETONIA';
    }
    else if (value == '2022-2023/URU') {
      this.selectedLeague = this.uruguay;
      this.league = 'URU';
    }
    else if (value == '2022-2023/SERBIA') {
      this.selectedLeague = this.serbia;
      this.league = 'SERBIA';
    }
    else if (value == '2022-2023/AUSTRALIA') {
      this.selectedLeague = this.australia;
      this.league = 'AUSTRALIA';
    }
    else if (value == '2022-2023/BULGARIA') {
      this.selectedLeague = this.bulgaria;
      this.league = 'BULGARIA';
    }
    else if (value == '2022-2023/GIBRALTAR') {
      this.selectedLeague = this.gibraltar;
      this.league = 'GIBRALTAR';
    }
    else if (value == '2022-2023/AZERBAIYAN') {
      this.selectedLeague = this.azerbaiyan;
      this.league = 'AZERBAIYAN';
    }
    else if (value == '2022-2023/HONGKONG') {
      this.selectedLeague = this.hongkong;
      this.league = 'HONGKONG';
    }
    else if (value == '2022-2023/INDIA') {
      this.selectedLeague = this.india;
      this.league = 'INDIA';
    }

  }

  onSelectedSeason(value: string): void {
    if (value.includes('2022-2023'))
    {
      this.onSelected(value + "/" + this.league);
    }
    else
    {
      this.service.netIncomeSelectedYear(value + "/" + this.league ).subscribe(response => {
        this.selectedLeague = response.seasonYear;
      })
    }
  }


  updateCVSs(): void {
    this.service.UpdateCSVs();

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

  
  onPress() {
    // this.display = true;
    // if you want the component to show and hide on click pressed, use 
    // use this line
    this.display = !this.display;

    const hole = document.getElementById('holeModal');
    if (hole != null ) {
      if(this.display==true)
      {
        // hole.style.filter = "grayscale(100%)";
        hole.style.opacity = "0.3";
      }
      else
      {
        hole.style.opacity = "1";
        // hole.style.filter = "grayscale(0)";
      }        
    }
  }

}
