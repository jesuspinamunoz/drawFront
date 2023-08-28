import { Component, OnInit } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface MyDictionary {
  [key: string]: any[]; // Cambia 'any[]' por el tipo apropiado para tus arrays
}

@Component({
  selector: 'app-infobets',
  templateUrl: './infobets.component.html',
  styleUrls: ['./infobets.component.css']
})
export class InfobetsComponent implements OnInit {

  constructor(private service: BackConnService, private router: Router) { }

  infoBetObjets:MyDictionary = {};

  ngOnInit(): void {
    this.service.getInfoBets().subscribe(response => {
        this.infoBetObjets = response;
      },
        (error: HttpErrorResponse) => {
        const statusCode = error.status;
        this.router.navigate(["login"]);
      }
    )
  }

  onSettingsClick(_id:string){
    console.log("_id")
    this.router.navigate(["infoBetForm", { id:_id }]);
  }
  onDeleteClick(_id:string){
    this.service.deleteBet(_id).subscribe(response => { 
      this.router.navigate([""]);
    });
  }

  addBet(){
    this.router.navigate(["infoBetForm", { id: "None"}]);
  }

}
