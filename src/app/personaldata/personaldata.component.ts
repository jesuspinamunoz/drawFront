import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private service: BackConnService) { }

  ngOnInit(): void {
    this.service.getMyPersonalData().subscribe(response => {
      this.username = response.username;      
      this.password = response.password; 
      this.startbettingmoney = response.startbettingmoney; 
      this.telegramHash = response.telegramHash; 
    }) 
  }
  updatePersonalData(): void {

    console.log(this.username);
    console.log(this.password);
    console.log(this.startbettingmoney);
    console.log(this.telegramHash);

    this.service.updateMyPersonalData(this.username, this.password, this.startbettingmoney, this.telegramHash).subscribe(response => { 
      this.router.navigate([""]);
    })

  }

}
