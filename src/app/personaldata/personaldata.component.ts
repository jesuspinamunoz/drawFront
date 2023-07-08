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
  objetivo:number = 0;
  constructor(private router: Router, private service: BackConnService) { }

  ngOnInit(): void {
    this.service.getMyPersonalData().subscribe(response => {
      this.username = response.username;      
      this.password = response.password; 
      this.startbettingmoney = response.startbettingmoney; 
      this.telegramHash = response.telegramHash; 
      this.objetivo = response.objetivo;
    }) 
  }
  updatePersonalData(): void {
    this.service.updateMyPersonalData(this.username, this.password, this.startbettingmoney, this.telegramHash, this.objetivo).subscribe(response => { 
      this.router.navigate([""]);
    })
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(["login"]);
  }

}
