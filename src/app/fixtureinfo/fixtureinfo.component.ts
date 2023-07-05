import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-fixtureinfo',
  templateUrl: './fixtureinfo.component.html',
  styleUrls: ['./fixtureinfo.component.css']
})
export class FixtureinfoComponent implements OnInit {

  @Input() league:any;
  lastUpdateDate : string = ""; 
  lastUpdateMatch : string = "";  
  lastUpdateMatchResult : string = "";  
  homeDraws : { [key: string]: number } = {};
  awayDraws : { [key: string]: number } = {};
  fullDraws : { [key: string]: number } = {};

  fullDrawsArray: any[] = [];
  
  sortedByTeam: boolean = false;
  sortedByTotal: boolean = false;
  sortedByHome: boolean = false;
  sortedByAway: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    if(this.league)
    {
      this.lastUpdateDate = this.league.lastUpdateDate;
      this.lastUpdateMatch = this.league.lastUpdateMatch;
      this.lastUpdateMatchResult = this.league.lastUpdateMatchResult;
      this.homeDraws = this.league.homeDraws;
      this.awayDraws = this.league.awayDraws;
      this.fullDraws = this.league.fullDraws;

      for (const item in this.league.fullDraws) {
        const leaguesNetIncomeDict: { [key: string]: number } = {};
        leaguesNetIncomeDict[item] = this.league.fullDraws[item];
        this.fullDrawsArray.push(leaguesNetIncomeDict);        
      }
    }
  }

  returnZero() {
    return 0
  }

  getKey(obj: any): string {
    return Object.keys(obj)[0];
  }

  getValue(obj: any): any {
    const key = Object.keys(obj)[0];
    return obj[key];
  }
  
  sortTableByTeam() {
    this.sortedByTeam = !this.sortedByTeam;
    this.fullDrawsArray = this.fullDrawsArray.sort((a, b) => {
      const ligaA = this.getKey(a).toLowerCase();
      const ligaB = this.getKey(b).toLowerCase();
      if (this.sortedByTeam) {
        if (ligaA < ligaB) {
          return -1;
        }
        if (ligaA > ligaB) {
          return 1;
        }
      }
      else{
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

  sortTableByTotal()
  {    
    this.sortedByTotal = !this.sortedByTotal;

    this.fullDrawsArray.sort((a, b) => {
      const ligaA = this.getValue(a);
      const ligaB = this.getValue(b);
      if (this.sortedByTotal) {
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


  sortTableByHome()
  {
    this.sortedByHome = !this.sortedByHome;

    this.fullDrawsArray.sort((a, b) => {
      const ligaA = this.homeDraws[this.getKey(a)];
      const ligaB = this.homeDraws[this.getKey(b)];
      if (this.sortedByHome) {
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

  sortTableByAway()
  {
    this.sortedByAway = !this.sortedByAway;

    this.fullDrawsArray.sort((a, b) => {
      const ligaA = this.awayDraws[this.getKey(a)];
      const ligaB = this.awayDraws[this.getKey(b)];
      if (this.sortedByAway) {
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
