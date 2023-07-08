import { Component, OnInit } from '@angular/core';

import { BackConnService } from 'src/app/back-conn.service';
@Component({
  selector: 'app-activebetleagues',
  templateUrl: './activebetleagues.component.html',
  styleUrls: ['./activebetleagues.component.css']
})
export class ActivebetleaguesComponent implements OnInit {
  activeBetLeagues: any[] = [];

  
  sortedByLiga:boolean = false;
  sortedByMoney:boolean = false;

  constructor(private service: BackConnService) { }

  ngOnInit(): void {
    this.service.getActiveBetLeagues().subscribe(response => {
      for (const item in response) {
        const activeBetLeaguesDict: { [key: string]: number } = {};
        activeBetLeaguesDict[item] = response[item];
        this.activeBetLeagues.push(activeBetLeaguesDict);
      }
    })  
  }

  getKey(obj: any): string {
    return Object.keys(obj)[0];
  }

  getValue(obj: any): any {
    const key = Object.keys(obj)[0];
    return obj[key];
  }
  returnZero() {
    return 0
  }

  sortTableByLiga() {
    this.sortedByLiga = !this.sortedByLiga;
    this.activeBetLeagues.sort((a, b) => {
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


  sortTableByMoney() {
    this.sortedByMoney = !this.sortedByMoney;

    this.activeBetLeagues.sort((a, b) => {
      const ligaA = this.getValue(a);
      const ligaB = this.getValue(b);
      if (this.sortedByMoney) {
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
