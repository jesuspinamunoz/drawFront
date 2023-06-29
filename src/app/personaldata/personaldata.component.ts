import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.css']
})
export class PersonaldataComponent implements OnInit {

  username:string = "";
  password:string = "";
  startbettingmoney:string = "";
  telegramHash:string = "";
  constructor(private route: ActivatedRoute, private service: BackConnService) { }

  ngOnInit(): void {
    this.service.getMyPersonalData().subscribe(response => {
      this.username = response.username;      
      this.password = response.password; 
      this.startbettingmoney = response.startbettingmoney; 
      this.telegramHash = response.telegramHash; 
    }) 
  }

}
