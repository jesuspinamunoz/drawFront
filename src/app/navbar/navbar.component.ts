import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackConnService } from 'src/app/back-conn.service'
import { HttpErrorResponse } from '@angular/common/http';
import { constants } from 'src/app/constants';
import { Chart, BarController, CategoryScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

document.documentElement.style.setProperty('--navMenuWidth', constants.navMenuWidth);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  progressChart: any = {};
  totalProfit:number = 0;
  objetivo:number = 0;


  constructor(private service: BackConnService, private router: Router) { }

  ngOnInit(): void {
    Chart.register(BarController, CategoryScale);

    this.service.getNavBarInfo().subscribe(response => {
      this.totalProfit = response.TotalProfit;       
      this.objetivo = response.Objetivo;  
      console.log(this.objetivo);
      
      this.progressChart = new Chart("progressChart", {
        type: 'bar',
        data: {
          labels: ['Progress'],
          datasets: [
          {
            data: [this.objetivo],
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
            datalabels: {
              anchor: 'end',
              align: 'top',
              formatter: Math.round,
              font: {
                  weight: 'bold'
              }
          }
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
          },
          
        }
      });
    })
  }

  ngOnChanges() {
  }

  onSelected(value: string): void {
    this.router.navigate(["leagueSummary", { data: value }]);
  }

  userInfo():void{
      this.router.navigate(["personalData"]);
  }

  mainSummary():void{    
    this.router.navigate([""]);
  }

  tipsterMode():void{    
    this.router.navigate(["tipstermode"]);
  }

  goToAlertedLeagues(){    
    this.router.navigate(["alertedLeagues"]);
  }

  goToActiveBetLeagues()
  {
    this.router.navigate(["activeBetLeagues"]);
  }

  
}
