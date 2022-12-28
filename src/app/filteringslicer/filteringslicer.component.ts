import { Component, OnInit, Input } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service'

@Component({
  selector: 'app-filteringslicer',
  templateUrl: './filteringslicer.component.html',
  styleUrls: ['./filteringslicer.component.css']
})
export class FilteringslicerComponent implements OnInit {

  constructor(private service: BackConnService) { }
  leagueName: any;
  leagueAlertLimit: any;
  isLimitDrawUpdated: any;
  
  @Input() league: any;
  ngOnInit(): void {      
    this.leagueName = this.league.league;
    this.leagueAlertLimit = this.league.limitAlertDraws;
    this.isLimitDrawUpdated = false;
  }
  ngOnChanges() {        
    this.leagueName = this.league.league;
    this.leagueAlertLimit = this.league.limitAlertDraws;
    this.isLimitDrawUpdated = false;
  }

  updateNDraws(value: string): void {
    this.service.UpdateLeagueNDraws(this.leagueName, value );
    this.isLimitDrawUpdated = true;
  }
}





