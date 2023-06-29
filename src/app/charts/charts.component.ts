import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Chart from 'chart.js/auto/auto.mjs';
import zoomPlugin from 'chartjs-plugin-zoom';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() league: any;
  @Input() usersNetMoney: any;
  @Input() showInfoLeague: boolean = false;;

  incomeChart: any = {};
  noConsecutiveDraws: any = {};
  drawsByFixture: any = {};
  constructor() { }

  ngOnInit(): void {
    // this.incomeChart.register(zoomPlugin);
    // this.noConsecutiveDraws.register(zoomPlugin);
    // this.drawsByFixture.register(zoomPlugin);
  }
  ngOnChanges() {
    if (this.incomeChart instanceof Chart) {
      this.incomeChart.destroy();
    }
    if (this.noConsecutiveDraws instanceof Chart) {
      this.noConsecutiveDraws.destroy();
    }
    if (this.drawsByFixture instanceof Chart) {
      this.drawsByFixture.destroy();
    }

    if(this.usersNetMoney)
    {
      this.incomeChart = new Chart("Income", {
        type: 'bar',
        data: {
          labels: this.usersNetMoney.IncomeChart_date_xAxis,
          datasets: [{
            label: 'Income',
            data: this.usersNetMoney.IncomeChart_netMoney_yAxis,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
                modifierKey: 'ctrl',
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                drag: {
                  enabled: true
                },
                mode: 'x',
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: "black"
              }
            },
            y: {
              ticks: {
                color: "black"
              }
            }
          }
        },
      });
    }

    if(this.showInfoLeague)
    {
      if(this.league)
      {
        this.noConsecutiveDraws = new Chart("NoConsecutiveDraws", {
          type: 'bar',
          data: {
            labels: this.league.chart_noConsecutiveDraws_xAxis_matchNumber,
            datasets: [{
              label: 'No Draws Consecutive',
              data: this.league.chart_noConsecutiveDraws_yAxis_noDrawStreak,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              label: 'Spent Money',
              data: this.league.chart_noConsecutiveDraws_yAxis_martingala,
              backgroundColor: 'rgba(80, 0, 30, 0.5)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              xAxisID: 'x2',
              hidden: true,
            },
            ]
          },
          options: {
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x',
                  modifierKey: 'ctrl',
                },
                zoom: {
                  wheel: {
                    enabled: true,
                  },
                  pinch: {
                    enabled: true
                  },
                  drag: {
                    enabled: true
                  },
                  mode: 'x',
                }
              }
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
        this.drawsByFixture = new Chart("drawsByFixture", {
          type: 'bar',
          data: {
            labels: this.league.chart_drawsByFixture_xAxis_weekNumber,
            datasets: [{
              label: 'Draw by Week',
              data: this.league.chart_drawsByFixture_yAxis_drawsByWeek,
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x',
                  modifierKey: 'ctrl',
                },
                zoom: {
                  wheel: {
                    enabled: true,
                  },
                  pinch: {
                    enabled: true
                  },
                  drag: {
                    enabled: true
                  },
                  mode: 'x',
                }
              }
            },
            scales: {
              y: {
                  ticks: {
                      precision: 0,
                      color: "white"
                  }
              },
              x: {
                ticks: {
                    color: "white"
                }
            }
          }
          }
        });

        if (this.league.noDrawStreak >= this.league.limitAlertDraws) {
          alert("NO Draws: " + this.league.noDrawStreak);
        }
      }
    }
  }

  resetZoom() {
    // this.incomeChart.resetZoom();
    this.noConsecutiveDraws.resetZoom();
    this.drawsByFixture.resetZoom();
  }

}
