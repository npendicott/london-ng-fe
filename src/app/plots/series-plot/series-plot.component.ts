import { Component, OnInit } from '@angular/core';

// Service 
import { EnergyService } from '../../services/energy/energy.service';
// Schema
// import { EnergyResponse, Results, Series } from '../../services/energy/energy.schema';

//import { deflateSync } from 'zlib';

// Libs
import { Chart } from 'chart.js';

@Component({
  selector: 'series-plot',
  templateUrl: './series-plot.component.html',
  styleUrls: ['./series-plot.component.css']
})
export class SeriesPlotComponent implements OnInit {
  // TODO: Is this the best struct?
  plot = [];

  constructor(private _energy: EnergyService) {}
  // constructor(private _test: TestService) {}

  // MAC000246
  // MAC005492
  // MAC004431
  // MAC004387
  ngOnInit() {
    this._energy.getReading("MAC005492", "2012-04-12 10:30:00.0000000", "2012-05-12 10:30:00.0000000")
      .subscribe( res => {
        // console.log(res);
      
        // TODO: Move this to a method in the service, or some method
        // Readings
        let readingsMinIndex = 5;
        let readingsMin = res['Results'][0].Series[0].values
          .map(reading => reading[readingsMinIndex]);

        let readingsAvgIndex = 3;
        let readingsAvg = res['Results'][0].Series[0].values
          .map(reading => reading[readingsAvgIndex]);

        let readingsMaxIndex = 2;
        let readingsMax = res['Results'][0].Series[0].values
          .map(reading => reading[readingsMaxIndex]);

        // Dates
        let readingsDateIndex = 0;
        let dates = res['Results'][0].Series[0].values
          .map(reading => reading[readingsDateIndex]);
        // console.log(dates);

        let datesFmt = []
        dates.forEach(element => {
          let dateFmt = new Date(element)
          // datesFmt.push(dateFmt.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
          datesFmt.push(dateFmt.toLocaleTimeString('en', { month: 'short', day: 'numeric' }))
          // console.log(dateFmt.toLocaleTimeString('en', { month: 'short', day: 'numeric' }));
        });
        // END TODO
        
        // Chart stuff
        var chartConfig = {
          type: 'line',
          data: {
            labels: datesFmt,  
            datasets: [
              {
                label: 'Daily Minimum',
                borderColor: '#3cba9f',
                data: readingsMin, 
                fill: false,
              },
              {
                label: 'Daily Average',
                borderColor: '#ffcc00',
                data: readingsAvg, 
                fill: false,
              },
              {
                label: 'Daily Maximum',
                borderColor: '#3cba9f',
                data: readingsMax, 
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
