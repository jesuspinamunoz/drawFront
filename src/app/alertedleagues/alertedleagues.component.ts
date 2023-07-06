import { Component, OnInit } from '@angular/core';

import { BackConnService } from 'src/app/back-conn.service';
@Component({
  selector: 'app-alertedleagues',
  templateUrl: './alertedleagues.component.html',
  styleUrls: ['./alertedleagues.component.css']
})
export class AlertedleaguesComponent implements OnInit {
  
  sortedByLiga:boolean = false;
  sortedByStrike:boolean = false;
  alertedLeagues: any[] = [];

  constructor(private service: BackConnService) { }

  ngOnInit(): void {
    this.service.getAlertedLeagues().subscribe(response => {
      for (const item in response.alerts) {
        const alertedLeaguesDict: { [key: string]: number } = {};
        console.log("item: " + item + " . value: " + response.alerts[item]);
        alertedLeaguesDict[item] = response.alerts[item];
        this.alertedLeagues.push(alertedLeaguesDict);
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
    this.alertedLeagues.sort((a, b) => {
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


  sortTableByStrike() {
    this.sortedByStrike = !this.sortedByStrike;

    this.alertedLeagues.sort((a, b) => {
      const ligaA = this.getValue(a);
      const ligaB = this.getValue(b);
      if (this.sortedByStrike) {
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
