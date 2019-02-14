import { Component, OnInit } from '@angular/core';

// Service 
import { EnergyService } from '../energy.service';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  constructor(private _energy: EnergyService) {}

  ngOnInit() {
    console.log("hello");
    this._energy.dailyForcast()
      .subscribe( res => {
        console.log(res);

      })

  }

}
