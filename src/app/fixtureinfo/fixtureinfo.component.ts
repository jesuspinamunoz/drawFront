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
  homeDraws = new Map<string, number>();
  awayDraws = new Map<string, number>();
  fullDraws = new Map<string, number>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.lastUpdateDate = this.league.lastUpdateDate;
    this.lastUpdateMatch = this.league.lastUpdateMatch;
    this.lastUpdateMatchResult = this.league.lastUpdateMatchResult;
    this.homeDraws = this.league.homeDraws;
    this.awayDraws = this.league.awayDraws;
    this.fullDraws = this.league.fullDraws;
  }
  returnZero() {
    return 0
  }

}
