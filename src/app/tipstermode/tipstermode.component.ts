import { Component, OnInit } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service';

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

  league:string = "Total";

  constructor(private service: BackConnService) { }

  ngOnInit(): void {
    this.service.getTipsterMode().subscribe(response => {
      this.league = "Total";
      this.ImporteTotalApostado = response.ImporteTotalApostado[this.league];
      this.ROI = response.ROI[this.league];
      this.Exito = response.Exito[this.league];
      this.ApuestasGanadoras = response.ApuestasGanadoras[this.league];
      this.ApuestasPerdedoras = response.ApuestasPerdedoras[this.league];
      this.MaxOdd = response.MaxOdd[this.league];
      this.MinOdd = response.MinOdd[this.league];
      this.AverageOdd = response.AverageOdd[this.league];
      this.MaxImporte = response.MaxImporte[this.league];
      this.ImporteMedio = response.ImporteMedio[this.league];     
    })
  }

}
