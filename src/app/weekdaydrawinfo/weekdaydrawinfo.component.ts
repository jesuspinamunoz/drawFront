import { Component, OnInit, Input } from '@angular/core';

interface WeekDayInfo {
  Total: string;
  Monday: string;
  MondayDraws: string;
  MondayMatches: string;  
  Tuesday: string;
  TuesdayDraws: string;
  TuesdayMatches: string;
  Wednesday: string;
  WednesdayDraws: string;
  WednesdayMatches: string;
  Thursday: string;
  ThursdayDraws: string;
  ThursdayMatches: string;
  Friday: string;
  FridayDraws: string;
  FridayMatches: string;
  Saturday: string;
  SaturdayDraws: string;
  SaturdayMatches: string;
  Sunday: string;
  SundayDraws: string;
  SundayMatches: string;
}

@Component({
  selector: 'app-weekdaydrawinfo',
  templateUrl: './weekdaydrawinfo.component.html',
  styleUrls: ['./weekdaydrawinfo.component.css']
})

export class WeekdaydrawinfoComponent implements OnInit {
  @Input() league: any;
  weekDayInfo: WeekDayInfo = {
    Total: "",
    Monday: "",
    MondayDraws: "",
    MondayMatches: "",  
    Tuesday: "",
    TuesdayDraws: "",
    TuesdayMatches: "",
    Wednesday: "",
    WednesdayDraws: "",
    WednesdayMatches: "",
    Thursday: "",
    ThursdayDraws: "",
    ThursdayMatches: "",
    Friday: "",
    FridayDraws: "",
    FridayMatches: "",
    Saturday: "",
    SaturdayDraws: "",
    SaturdayMatches: "",
    Sunday: "",
    SundayDraws: "",
    SundayMatches: "",
  };

  

  constructor() { }

  ngOnInit(): void {
    if(this.league)
    {
      this.weekDayInfo = this.league.weekDayInfo;
    }
  }
  ngOnChanges() {
    //Week Day Info
    if(this.league)
    {
      this.weekDayInfo = this.league.weekDayInfo;
    }
  }

}
