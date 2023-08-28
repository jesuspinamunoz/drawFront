import { Component, OnInit, Input } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service';

@Component({
  selector: 'app-bettingshopdataform',
  templateUrl: './bettingshopdataform.component.html',
  styleUrls: ['./bettingshopdataform.component.css']
})
export class BettingshopdataformComponent implements OnInit {

  constructor(private service: BackConnService) { }


  @Input() username: string = ""; 
  @Input() password: string = ""; 

  @Input() startbettingmoney: number = 0; 
  @Input() telegramHash: string = ""; 
  @Input() objetivo: number = 0; 
  @Input() expirationDate: string = ""; 

  @Input() isUserConfig: boolean = false; 
  

  ngOnInit(): void {
  }

  updateBettingShopData()
  {

  }
  updatePersonalConfiguration()
  {
    console.log(this.startbettingmoney, this.telegramHash, this.objetivo)
    this.service.setUserConfigurationData(this.startbettingmoney, this.telegramHash, this.objetivo).subscribe();
  }

}
