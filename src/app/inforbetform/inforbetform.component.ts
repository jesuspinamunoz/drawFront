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
  date:string = "";
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
      this.date = params.get('date') as string;  
      this.leagueName = params.get('league') as string; 
      this.status = 'Perdida';    

      if(this.leagueName!="None")
      {
        this.isUpdateForm = true;
        this.service.getInfoBetForm(this.leagueName, this.date).subscribe(response => {
          this.odd = response.Cuota;
          this.moneyBet = response.DineroApostado;
          this.wonBet = response.Ganada;
          })        
      }
      
      });  
  }

  onSelectedStatus(_status:any)
  {
    console.log(_status)
    this.status = _status.type;
    this.wonBet = true;
    if(_status = 'closed')
     {
      this.showClosedParameters = true;
     }
  }

  updateSingleInfoBet()
  {
    if(this.isUpdateForm)
    {
      this.service.updateInfoBetForm(this.leagueName, this.date ,this.odd, this.moneyBet, this.status, this.cashOut).subscribe(response => { 
        this.router.navigate([""]);
      });
    }
    else{
      this.service.addInfoBetForm(this.leagueName, this.odd, this.moneyBet, this.status, this.cashOut).subscribe(response => { 
        this.router.navigate([""]);
      });

    }
    
  }

}
