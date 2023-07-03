import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service'
import { HttpErrorResponse } from '@angular/common/http';
import { constants } from 'src/app/constants';
import { Chart, BarController, CategoryScale } from 'chart.js';

document.documentElement.style.setProperty('--navMenuWidth', constants.navMenuWidth);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  league: string = '';
  
  progressChart: any = {};

  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
    Chart.register(BarController, CategoryScale);

    this.progressChart = new Chart("progressChart", {
      type: 'bar',
      data: {
        labels: ['Progress'],
        datasets: [
        {
          data: [80],
          backgroundColor: 'rgba(3, 252, 22, 0.5)',
          borderColor: [
            'rgba(0, 0, 0, 1)',
          ],
          borderWidth: 2,
          borderSkipped: 'right',

        },
        {
          data: [100],
          backgroundColor: 'rgba(217, 217, 217, 1)',
          borderColor: [
            'rgba(0, 0, 0, 1)',
          ],
          borderWidth: 2,
          
          borderSkipped: false,
        }      
      ]
      },
      options: {
        plugins: {
          legend:{
            display:false,
          },
        },
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            // stacked: true,
            display: false,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 10
            }
          },
          y: {
            stacked: true,
            display: false
          }
        },
        elements: {
          bar: {
            borderRadius: {
              topLeft: 10,
              topRight: 10,
              bottomLeft: 10,
              bottomRight: 10
            }
          }
        }
      }
    });
    
    


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

      console.log("-> nav bar onSelectedSeason");
      console.log(this.league);
      this.service.netIncomeSelectedYear(value + "/" + this.league).subscribe(response => {
        this.league = value;
        this.router.navigate(["leagueSummary", { data: value }]);
      },
        (error: HttpErrorResponse) => {
          const statusCode = error.status;
          this.service.setLoggedIn(false);
          this.router.navigate(["login"]);
        })
    }
  }
}
