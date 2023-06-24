import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service';

interface userNetMoney {
  LeagueID: string;
  date_xAxis: any[];
  netMoney_yAxis: any[];
}

@Component({
  selector: 'app-leaguesummary',
  templateUrl: './leaguesummary.component.html',
  styleUrls: ['./leaguesummary.component.css']
})
export class LeaguesummaryComponent implements OnInit {
  
  selectedLeague: any;
  userNetMoneySelectedObject: any;
  leagueName: any;
  display = false;  

  constructor(private route: ActivatedRoute, private service: BackConnService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.leagueName = params.get('data') as string;
      this.service.getLeagueSummary(this.leagueName).subscribe(response => {
        this.selectedLeague = response[this.leagueName];
        this.userNetMoneySelectedObject = response.userNetMoney.find((objeto: userNetMoney) => objeto.LeagueID === 'allLeagues')
      })        
    });
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

  compareYears() {
    this.display = !this.display;
  }

}
