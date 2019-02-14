import { Component, OnInit } from '@angular/core';

// Service 
import { EnergyService } from '../../services/energy.service';
//import { deflateSync } from 'zlib';

// Libs
import { Chart } from 'chart.js';

@Component({
  selector: 'app-series-plot',
  templateUrl: './series-plot.component.html',
  styleUrls: ['./series-plot.component.css']
})
export class SeriesPlotComponent implements OnInit {

  // TODO: Is this the best struct?
  plot = [];

  constructor(private _energy: EnergyService) {}

  ngOnInit() {
    // Subscribe to service
    this._energy.dailyForcast()
      .subscribe( res => {
        // TODO: Move this to a method in the service, maybe some struct
        // Temps
        let temps_min = res['list'].map(reading => reading.temp.min);
        let temps_max = res['list'].map(reading => reading.temp.max);

        // Dates
        let dates = res['list'].map(reading => reading.dt)
        let datesFmt = []
        dates.forEach(element => {
          let dateFmt = new Date(element * 1000)
          datesFmt.push(dateFmt.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        });
        // END TODO
        
        // Chart stuff
        var chartConfig = {
          type: 'line',
          data: {
            labels: datesFmt,  
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
        };

        this.plot = new Chart('canvas', chartConfig);

      });
  }

}


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
