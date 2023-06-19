import { Component, OnInit } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-leagueinfo',
  templateUrl: './leagueinfo.component.html',
  styleUrls: ['./leagueinfo.component.css']
})
export class LeagueinfoComponent implements OnInit {

  league: string = '';
  selectedLeague: any;
  leagues: { [clave: string]: any } = {};
  display = false;

  constructor(private service: BackConnService) { }

  ngOnInit(): void {}

  comparisonYear() {
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


  onSelected(value: string): void {
    //restart selected year to 2022-2023
    const select = document.getElementById('selectSeason') as HTMLSelectElement | null;
    if (select != null) {
      select.selectedIndex = 0;
    }
    // get the json league for the selected league from selector
    this.league = value;
    this.selectedLeague = this.leagues[value];
  }

  onSelectedSeason(value: string): void {
    if (value.includes('2022-2023'))
    {
      this.onSelected(this.league);
    }
    else
    {
      this.service.netIncomeSelectedYear(value + "/" + this.league ).subscribe(response => {
        this.selectedLeague = response.seasonYear;
      })
    }
  }

}
