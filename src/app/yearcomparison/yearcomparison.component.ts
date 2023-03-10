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
  // @Input() league2223: any;

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
    this.service.netIncomeSelectedYear("2022-2023/" + this.leagueName ).subscribe(response => {
      this.league2223 = response.seasonYear;
      this.service.netIncomeSelectedYear("2021-2022/" + this.leagueName ).subscribe(response => {
        this.league2122 = response.seasonYear;
        this.service.netIncomeSelectedYear("2020-2021/" + this.leagueName ).subscribe(response => {
          this.league2021 = response.seasonYear;
          this.service.netIncomeSelectedYear("2019-2020/" + this.leagueName ).subscribe(response => {
            this.league1920 = response.seasonYear;
            this.service.netIncomeSelectedYear("2018-2019/" + this.leagueName ).subscribe(response => {
              this.league1819 = response.seasonYear;
              this.service.netIncomeSelectedYear("2017-2018/" + this.leagueName ).subscribe(response => {
                this.league1718 = response.seasonYear;
                this.service.netIncomeSelectedYear("2016-2017/" + this.leagueName ).subscribe(response => {
                  this.league1617 = response.seasonYear;
                  this.service.netIncomeSelectedYear("2015-2016/" + this.leagueName ).subscribe(response => {
                    this.league1516 = response.seasonYear;
                    this.service.netIncomeSelectedYear("2014-2015/" + this.leagueName ).subscribe(response => {
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
  }

  OnChanges() {
    let maxArray: number = Math.max(this.league2223.NoDrawKeyArray.length, this.league2122.NoDrawKeyArray.length, this.league2021.NoDrawKeyArray.length, this.league1920.NoDrawKeyArray.length, this.league1819.NoDrawKeyArray.length, this.league1718.NoDrawKeyArray.length, this.league1617.NoDrawKeyArray.length, this.league1516.NoDrawKeyArray.length, this.league1415.NoDrawKeyArray.length)

    for(var i = this.league2223.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league2223.NoDrawKeyArray.push(0);
      this.league2223.NoDrawValueArray.push(0);
    }   
    for(var i = this.league2122.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league2122.NoDrawKeyArray.push(0);
      this.league2122.NoDrawValueArray.push(0);
    }  
    for(var i = this.league2021.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league2021.NoDrawKeyArray.push(0);
      this.league2021.NoDrawValueArray.push(0);
    }  
    for(var i = this.league1920.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league1920.NoDrawKeyArray.push(0);
      this.league1920.NoDrawValueArray.push(0);
    }  
    
    for(var i = this.league1819.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league1819.NoDrawKeyArray.push(0);
      this.league1819.NoDrawValueArray.push(0);
    }  
    for(var i = this.league1718.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league1718.NoDrawKeyArray.push(0);
      this.league1718.NoDrawValueArray.push(0);
    }  
    for(var i = this.league1617.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league1617.NoDrawKeyArray.push(0);
      this.league1617.NoDrawValueArray.push(0);
    }  
    for(var i = this.league1516.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league1516.NoDrawKeyArray.push(0);
      this.league1516.NoDrawValueArray.push(0);
    }  
    for(var i = this.league1415.NoDrawKeyArray.length + 1;i<=maxArray;i++) { 
      this.league1415.NoDrawKeyArray.push(0);
      this.league1415.NoDrawValueArray.push(0);
    }  
    

    if (this.noConsecutiveDrawsComparison instanceof Chart) {
      this.noConsecutiveDrawsComparison.destroy();
    }


    this.noConsecutiveDrawsComparison = new Chart("noConsecutiveDrawsComparison", {
      type: 'bar',
      data: {
        labels: this.league2223.NoDrawKeyArray,
        datasets: [{
          label: '22-23',
          data: this.league2223.NoDrawValueArray,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: '21-22',
          type: 'line',
          data: this.league2122.NoDrawValueArray,
          backgroundColor: 'rgba(0,19,255, 1)',
          borderColor: 'rgba(0,19,255, 1)',
          borderWidth: 3,
          xAxisID: 'x2',
          hidden: false,
        },
        {
          label: '20-21',
          data: this.league2021.NoDrawValueArray,
          backgroundColor: 'rgba(80, 0, 30, 1)',
          borderColor: 'rgba(80, 0, 30, 1, 1)',
          borderWidth: 3,
          xAxisID: 'x2',
          hidden: false,
        },
        {
          label: '19-20',          
          type: 'line',
          data: this.league1920.NoDrawValueArray,
          backgroundColor: 'rgba(58, 255, 0, 1)',
          borderColor: 'rgba(58, 255, 0, 1)',
          borderWidth: 1,
          xAxisID: 'x2',
          hidden: false,
        },        
        {
          label: '18-19',
          data: this.league1819.NoDrawValueArray,
          backgroundColor: 'rgba(58, 5, 90, 1)',
          borderColor: 'rgba(58, 5, 90, 1)',
          borderWidth: 3,
          xAxisID: 'x2',
          hidden: false,
        },     
        {
          label: '17-18',
          data: this.league1718.NoDrawValueArray,
          backgroundColor: 'rgba(158, 55, 190, 1)',
          borderColor: 'rgba(158, 55, 190, 1)',
          borderWidth: 3,
          xAxisID: 'x2',
          hidden: false,
        },
        {
          label: '16-17',
          data: this.league1617.NoDrawValueArray,
          backgroundColor: 'rgba(40, 50, 210, 1)',
          borderColor: 'rgba(40, 50, 210, 1)',
          borderWidth: 3,
          xAxisID: 'x2',
          hidden: false,
        },
        {
          label: '15-16',
          data: this.league1516.NoDrawValueArray,
          backgroundColor: 'rgba(140, 150, 210, 1)',
          borderColor: 'rgba(140, 150, 210, 1)',
          borderWidth: 3,
          xAxisID: 'x2',
          hidden: false,
        },
        {
          label: '14-15',
          data: this.league1415.NoDrawValueArray,
          backgroundColor: 'rgba(70, 75, 105, 1)',
          borderColor: 'rgba(70, 75, 105, 1)',
          borderWidth: 3,
          xAxisID: 'x2',
          hidden: false,
        },

        ]
      },
      options: {
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
