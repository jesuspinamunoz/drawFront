import { Component, OnInit } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipstermode',
  templateUrl: './tipstermode.component.html',
  styleUrls: ['./tipstermode.component.css']
})
export class TipstermodeComponent implements OnInit {

  ImporteTotalApostado:any;
  ROI:any;
  Exito:any;
  ApuestasGanadoras:any;
  ApuestasPerdedoras:any;
  MaxOdd:any;
  MinOdd:any;
  AverageOdd:any;
  MaxImporte:any;
  ImporteMedio:any;

  leagueName:string = "Total";
  
  leagueNames: string[] = []

  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
    this.service.getleagueNames().subscribe(response => {
      this.leagueNames = response.leagueNames;        
    });

    this.service.getTipsterMode().subscribe(response => {
      this.leagueName = "Total";
      this.ImporteTotalApostado = response.ImporteTotalApostado[this.leagueName];
      this.ROI = response.ROI[this.leagueName];
      this.Exito = response.Exito[this.leagueName];
      this.ApuestasGanadoras = response.ApuestasGanadoras[this.leagueName];
      this.ApuestasPerdedoras = response.ApuestasPerdedoras[this.leagueName];
      this.MaxOdd = response.MaxOdd[this.leagueName];
      this.MinOdd = response.MinOdd[this.leagueName];
      this.AverageOdd = response.AverageOdd[this.leagueName];
      this.MaxImporte = response.MaxImporte[this.leagueName];
      this.ImporteMedio = response.ImporteMedio[this.leagueName];     
    })
  }

  onSelected(value: string): void {
    this.leagueName = value;
    // this.router.navigate(["leagueSummary", { data: value }]);
  }

}
