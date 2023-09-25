import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service';

@Component({
  selector: 'app-inforbetform',
  templateUrl: './inforbetform.component.html',
  styleUrls: ['./inforbetform.component.css']
})
export class InforbetformComponent implements OnInit {
  leagueName:string = "";
  leagueId:string = "";
  date:string = "";
  homeTeam:string = "";
  awayTeam:string = "";
  odd:number = 0;
  moneyBet:number = 0;
  wonBet:boolean = false;
  status:string = "";
  showClosedParameters:boolean = false;
  cashOut:number = 0;
  selectedValue:string = "";
  leagueNames: string[] = [];

  isUpdateForm:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: BackConnService) { }

  ngOnInit(): void {
    this.service.getleagueNames().subscribe(response => {
      this.leagueNames = response.leagueNames;        
    })

    this.route.paramMap.subscribe(params => {
      this.leagueId = params.get('id') as string; 
      this.status = 'Perdida';    

      if(this.leagueId!="None")
      {
        this.isUpdateForm = true;
        this.service.getInfoBetForm(this.leagueId).subscribe(response => {
          this.odd = response.Cuota;
          this.moneyBet = response.DineroApostado;
          this.status = response.Status;
          this.leagueName = response.Liga;
          this.cashOut = response.Cashout;
          this.homeTeam = response.homeTeam;
          this.awayTeam = response.awayTeam;
          })        
      }
      
      });  
  }


  updateSingleInfoBet()
  {
    if(this.isUpdateForm)
    {
      this.service.updateInfoBetForm(this.leagueId, this.leagueName, this.date ,this.odd, this.moneyBet, this.status, this.cashOut, this.homeTeam, this.awayTeam).subscribe(response => { 
        this.router.navigate([""]);
      });
    }
    else{
      this.service.addInfoBetForm(this.leagueName, this.odd, this.moneyBet, this.status, this.cashOut, this.homeTeam, this.awayTeam).subscribe(response => { 
        this.router.navigate([""]);
      });
    }    
  }

  deleteBet()
  {
    this.service.deleteBet(this.leagueId).subscribe(response => { 
      this.router.navigate([""]);
    });
  }

}
