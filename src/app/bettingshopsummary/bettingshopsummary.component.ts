import { Component, OnInit } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service';

@Component({
  selector: 'app-bettingshopsummary',
  templateUrl: './bettingshopsummary.component.html',
  styleUrls: ['./bettingshopsummary.component.css']
})
export class BettingshopsummaryComponent implements OnInit {

  constructor(private service: BackConnService) { }

  response:any;
  bettingShopNames:any;


  ngOnInit(): void {
    this.service.getBettingShops().subscribe(response => {
      this.response = response;
      this.bettingShopNames = Object.keys(this.response);
      console.log(response);
      
    },
      // (error: HttpErrorResponse) => {
      //   const statusCode = error.status;
      //   this.router.navigate(["login"]);
      // }
    );
  }

  getKey(obj: any): string {
    return Object.keys(obj)[0];
  }

  getValue(obj: any): any {
    const key = Object.keys(obj)[0];
    return obj[key];
  }

  onInputChangeBetOnLeague(_activate:any, _bettingShop:any)
  {
    this.service.activateBettingShop(_bettingShop,_activate).subscribe();
  }

}
