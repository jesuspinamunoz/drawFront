import { Component, OnInit, Input } from '@angular/core';
import { BackConnService } from 'src/app/back-conn.service';

import Chart from 'chart.js/auto/auto.mjs';

@Component({
  selector: 'app-yearcomparison',
  templateUrl: './yearcomparison.component.html',
  styleUrls: ['./yearcomparison.component.css']
})
export class YearcomparisonComponent implements OnInit {
  @Input() leagueName: any;

  league2324:any;
  league2223:any;
  league2122:any;
  league2021:any;
  league1920:any;

  league1819:any;
  league1718:any;
  league1617:any;
  league1516:any;
  league1415:any;
  noConsecutiveDrawsComparison: any = {};

  constructor(private service: BackConnService) { }

  ngOnInit(): void {    
    this.service.netIncomeSelectedYear("2023-2024/" + this.leagueName).subscribe(response => {
      this.league2324 = response.seasonYear;
      this.service.netIncomeSelectedYear("2022-2023/" + this.leagueName).subscribe(response => {
        this.league2223 = response.seasonYear;
        this.service.netIncomeSelectedYear("2021-2022/" + this.leagueName).subscribe(response => {
          this.league2122 = response.seasonYear;
          this.service.netIncomeSelectedYear("2020-2021/" + this.leagueName).subscribe(response => {
            this.league2021 = response.seasonYear;
            this.service.netIncomeSelectedYear("2019-2020/" + this.leagueName).subscribe(response => {
              this.league1920 = response.seasonYear;
              this.service.netIncomeSelectedYear("2018-2019/" + this.leagueName).subscribe(response => {
                this.league1819 = response.seasonYear;
                this.service.netIncomeSelectedYear("2017-2018/" + this.leagueName).subscribe(response => {
                  this.league1718 = response.seasonYear;
                  this.service.netIncomeSelectedYear("2016-2017/" + this.leagueName).subscribe(response => {
                    this.league1617 = response.seasonYear;
                    this.service.netIncomeSelectedYear("2015-2016/" + this.leagueName).subscribe(response => {
                      this.league1516 = response.seasonYear;
                      this.service.netIncomeSelectedYear("2014-2015/" + this.leagueName).subscribe(response => {
                        this.league1415 = response.seasonYear;
                        this.OnChanges();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  OnChanges() {
    let maxArray: number = Math.max(this.league2324.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league2223.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league2122.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league2021.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league1920.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league1819.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league1718.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league1617.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league1516.chart_noConsecutiveDraws_xAxis_matchNumber.length, this.league1415.chart_noConsecutiveDraws_xAxis_matchNumber.length)

    for(var i = this.league2324.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league2324.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league2324.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    } 

    for(var i = this.league2223.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league2223.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league2223.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }   
    for(var i = this.league2122.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league2122.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league2122.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    for(var i = this.league2021.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league2021.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league2021.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    for(var i = this.league1920.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league1920.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league1920.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    
    for(var i = this.league1819.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league1819.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league1819.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    for(var i = this.league1718.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league1718.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league1718.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    for(var i = this.league1617.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league1617.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league1617.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    for(var i = this.league1516.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league1516.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league1516.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    for(var i = this.league1415.chart_noConsecutiveDraws_xAxis_matchNumber.length + 1;i<=maxArray;i++) { 
      this.league1415.chart_noConsecutiveDraws_xAxis_matchNumber.push(0);
      this.league1415.chart_noConsecutiveDraws_yAxis_noDrawStreak.push(0);
    }  
    

    if (this.noConsecutiveDrawsComparison instanceof Chart) {
      this.noConsecutiveDrawsComparison.destroy();
    }


    this.noConsecutiveDrawsComparison = new Chart("noConsecutiveDrawsComparison", {
      type: 'bar',
      data: {
        labels: this.league2223.chart_noConsecutiveDraws_xAxis_matchNumber,
        datasets: [
          {
            label: '23-24',
            type: 'line',
            data: this.league2324.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(255, 0, 0, 1)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1
          },
          {
            label: '22-23',
            type: 'line',
            data: this.league2223.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(0, 255, 0, 1)',
            borderColor: 'rgba(0, 255, 0, 1)',
            borderWidth: 1
          },
          {
            label: '21-22',
            type: 'line',
            data: this.league2122.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(0, 0, 255, 1)',
            borderColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 1
          },
          {
            label: '20-21',
            type: 'line',
            data: this.league2021.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(255, 255, 0, 1)',
            borderColor: 'rgba(255, 255, 0, 1)',
            borderWidth: 1,
          },
          {
            label: '19-20',          
            type: 'line',
            data: this.league1920.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(0, 255, 255, 1)',
            borderColor: 'rgba(0, 255, 255, 1)',
            borderWidth: 1,
          },        
          {
            label: '18-19',
            type: 'line',
            data: this.league1819.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(255, 0, 255, 1)',
            borderColor: 'rgba(255, 0, 255, 1)',
            borderWidth: 1
          },     
          {
            label: '17-18',
            type: 'line',
            data: this.league1718.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(28, 128, 0, 1)',
            borderColor: 'rgba(28, 128, 0, 1)',
            borderWidth: 1
          },
          {
            label: '16-17',
            type: 'line',
            data: this.league1617.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(128, 0, 128, 1)',
            borderColor: 'rgba(128, 0, 128, 1)',
            borderWidth: 1
          },
          {
            label: '15-16',
            type: 'line',
            data: this.league1516.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(0, 128, 128, 1)',
            borderColor: 'rgba(0, 128, 128, 1)',
            borderWidth: 1
          },
          {
            label: '14-15',
            type: 'line',
            data: this.league1415.chart_noConsecutiveDraws_yAxis_noDrawStreak,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
          },
        ]
        
      },
      options: {
        responsive: false, // Desactiva la opción "responsive"
        maintainAspectRatio: false,
        plugins: {
          // zoom: {
          //   pan: {
          //     enabled: true,
          //     mode: 'x',
          //     modifierKey: 'ctrl',
          //   },
          //   zoom: {
          //     wheel: {
          //       enabled: true,
          //     },
          //     pinch: {
          //       enabled: true
          //     },
          //     drag: {
          //       enabled: true
          //     },
          //     mode: 'x',
          //   }
          // }
        },
        scales: {
          x: {
            ticks: {
              color: "white"
            }
          },
          y: {
            ticks: {
              color: "white"
            }
          },
          x2: {
            display: false,
          }
        }
      }
    });




  }

}
