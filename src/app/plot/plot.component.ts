import { Component, OnInit } from '@angular/core';

// Service 
import { EnergyService } from '../energy.service';
import { deflateSync } from 'zlib';

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

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            lables: datesFmt,
            datasets: [
              {
                data: temps_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temps_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })


        console.log(temps_min);
        console.log(temps_max);
        console.log(dates);
        console.log(datesFmt);
      })

  }

}
