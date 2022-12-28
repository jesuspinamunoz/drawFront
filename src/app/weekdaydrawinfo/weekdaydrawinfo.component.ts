import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekdaydrawinfo',
  templateUrl: './weekdaydrawinfo.component.html',
  styleUrls: ['./weekdaydrawinfo.component.css']
})
export class WeekdaydrawinfoComponent implements OnInit {
  @Input() league: any;
  weekDayInfo: any;

  constructor() { }

  ngOnInit(): void {
    this.weekDayInfo = this.league.weekDayInfo;
  }
  ngOnChanges() {
    //Week Day Info
    this.weekDayInfo = this.league.weekDayInfo;
  }

}
