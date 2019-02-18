import { Component, OnInit } from '@angular/core';

// Service 
import { EnergyService } from '../../services/energy/energy.service';
// Schema
// import { EnergyResponse, Results, Series } from '../../services/energy/energy.schema';

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
  // constructor(private _test: TestService) {}

  ngOnInit() {
    this._energy.getReading("123", "2012-04-12 10:30:00.0000000", "2012-05-12 10:30:00.0000000")
      .subscribe( res => {
        // console.log(res);
      
        // TODO: Move this to a method in the service, or some method
        // Readings
        let readingsMinIndex = 5;
        let readingsMin = res['Results'][0].Series[0].values
          .map(reading => reading[readingsMinIndex]);
        console.log(readingsMin)

        let readingsAvgIndex = 3;
        let readingsAvg = res['Results'][0].Series[0].values
          .map(reading => reading[readingsAvgIndex]);
        console.log(readingsAvg)

        let readingsMaxIndex = 2;
        let readingsMax = res['Results'][0].Series[0].values
          .map(reading => reading[readingsMaxIndex]);
        console.log(readingsMax)

        // Dates
        let readingsDateIndex = 0;
        let dates = res['Results'][0].Series[0].values
          .map(reading => reading[readingsDateIndex]);
        console.log(dates);

        // let datesFmt = []
        // dates.forEach(element => {
        //   let dateFmt = new Date(element * 1000)
        //   datesFmt.push(dateFmt.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        // });
        // END TODO
        
        // Chart stuff
        var chartConfig = {
          type: 'line',
          data: {
            labels: dates,  
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
                label: 'My Daily Maximum',
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



    ////////////////////////// TEST
    // private _test: TestService

    // Subscribe to service
    // this._test.dailyForcast()
    //   .subscribe( res => {
    //     // TODO: Move this to a method in the service, maybe some struct
    //     // Temps
    //     let temps_min = res['list'].map(reading => reading.temp.min);
    //     let temps_max = res['list'].map(reading => reading.temp.max);

    //     // Dates
    //     let dates = res['list'].map(reading => reading.dt)
    //     let datesFmt = []
    //     dates.forEach(element => {
    //       let dateFmt = new Date(element * 1000)
    //       datesFmt.push(dateFmt.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
    //     });
    //     // END TODO
        
    //     // Chart stuff
    //     var chartConfig = {
    //       type: 'line',
    //       data: {
    //         labels: datesFmt,  
    //         datasets: [
    //           {
    //             label: 'My First dataset',
    //             borderColor: '#ffcc00',
    //             data: temps_min, 
    //             fill: false,
    //           },
    //           {
    //             label: 'My Secocnd dataset',
    //             borderColor: '#3cba9f',
    //             data: temps_max, 
    //             fill: false,
    //           },
    //         ]
    //       },
    //       options: {
    //         legend: {
    //           display: false
    //         },
    //         scales: {
    //           xAxes: [{
    //             display: true,
    //             scaleLabel: {
    //               display: true,
    //               labelString: 'Month'
    //             }
    //           }],
    //           yAxes: [{
    //             display: true,
    //             scaleLabel: {
    //               display: true,
    //               labelString: 'Value'
    //             }
    //           }]
    //         },
    //       }
    //     };

    //     this.plot = new Chart('canvas', chartConfig);
    // });
    ////////////////////////// TEST



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
