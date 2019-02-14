import { Component, OnInit } from '@angular/core';

// Service 
import { EnergyService } from '../energy.service';
//import { deflateSync } from 'zlib';

// Chart
import { Chart } from 'chart.js';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  chart = [];

  constructor(private _energy: EnergyService) {}

  ngOnInit() {
    console.log("hello");
    this._energy.dailyForcast()
      .subscribe( res => {
        // TODO: Move this to a method in the service 
        let temps_min = res['list'].map(reading => reading.temp.min);
        let temps_max = res['list'].map(reading => reading.temp.max);
        let dates = res['list'].map(reading => reading.dt)

        let datesFmt = []
        dates.forEach(element => {
          let dateFmt = new Date(element * 1000)
          datesFmt.push(dateFmt.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        });

        console.log(temps_min);


          





          
        var chartConfig = {
        // this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: datesFmt,  //['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                borderColor: '#ffcc00',
                data: temps_min, 
                fill: false,
              },
              {
                label: 'My Secocnd dataset',
                borderColor: '#3cba9f',
                data: temps_max, 
                fill: false,
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            },
          }
        // });
        };

        this.chart = new Chart('canvas', chartConfig);
































          // Snippet for Labels and Stuff
          // options: {
          //   responsive: true,
          //   title: {
          //     display: true,
          //     text: 'Chart.js Line Chart'
          //   },
          //   tooltips: {
          //     mode: 'index',
          //     intersect: false,
          //   },
          //   hover: {
          //     mode: 'nearest',
          //     intersect: true
          //   },
          //   scales: {
          //     xAxes: [{
          //       display: true,
          //       scaleLabel: {
          //         display: true,
          //         labelString: 'Time'
          //       }
          //     }],
          //     yAxes: [{
          //       display: true,
          //       scaleLabel: {
          //         display: true,
          //         labelString: 'Value'
          //       }
          //     }]
          //   }
          // }

                  // Not sure why this didnt work, get rid of it tbh
        // this.chart = new Chart('canvas', {
        //   type: 'line',
        //   // type: 'scatter',
        //   data: {
        //     // lables: datesFmt,
        //     lables: [1,2,3],
        //     datasets: [
        //       {
        //         // data: temps_max,
        //         data: [1, 2, 3],
        //         borderColor: '#3cba9f',
        //         fill: false
        //       },
        //       // {
        //       //   data: temps_min,
        //       //   borderColor: '#ffcc00',
        //       //   fill: false
        //       // },
        //     ]
        //   },
        //   options: {
        //     legend: {
        //       display: false
        //     },
        //     scales: {
        //       xAxes: [{
        //         display: true,
        //         scaleLabel: {
        //           display: true,
        //           labelString: 'Month'
        //         }
        //       }],
        //       yAxes: [{
        //         display: true,
        //         scaleLabel: {
        //           display: true,
        //           labelString: 'Value'
        //         }
        //       }]
        //     },
        //     // scales: {
        //     //   xAxes: [{
        //     //     display: true
        //     //   }],
        //     //   yAxes: [{
        //     //     display: true
        //     //   }]
        //     // }
        //   }
        // })
      })
  }
}
