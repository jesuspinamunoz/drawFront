import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  league: string = '';

  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
  }

  onSelected(value: string): void {
    this.league = value;
    this.router.navigate(["leagueSummary", { data: value }]);
  }

  onSelectedSeason(value: string): void {
    if (value.includes('2022-2023')) {
      this.onSelected(this.league);
    }
    else {
      this.service.netIncomeSelectedYear(value + "/" + this.league).subscribe(response => {
      },
        (error: HttpErrorResponse) => {
          const statusCode = error.status;
          this.service.setLoggedIn(false);
          this.router.navigate(["login"]);
        })
    }
  }
}
