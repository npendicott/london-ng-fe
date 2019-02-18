// https://www.youtube.com/watch?v=_05v0mrNLh0
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// rxjs
// Others that may be useful: , filter, catchError, mergeMap
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Schema
// import { EnergyResponse, Results, Series } from './energy.schema';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  // TODO: Schema
  // TODO: Why is this declared out here, not in getReading?
  // res: Observable<EnergyResponse>;
  res: any;

  constructor(private _http: HttpClient) { }

  getReading(macId: string, startDate: string, endDate: string){
    // console.log(macId, startDate, endDate)
  
    let params = new HttpParams()
      .set('start', startDate)
      .set('end', endDate);

    // this.res = this.res = this._http.get<EnergyResponse>("localhost:9090/readings/daily", { params })
    this.res = this._http.get("http://localhost:9090/readings/daily", { params })
      .pipe(map(result => result)); // What is this?

    return this.res;
    // // Temps
    // let temps_min = this.res['list'].map(reading => reading.temp.min);
    // let temps_max = this.res['list'].map(reading => reading.temp.max);

    // // Dates
    // let dates = this.res['list'].map(reading => reading.dt)
    // let datesFmt = []


    // dates.forEach(element => {
    //   let dateFmt = new Date(element * 1000)
    //   datesFmt.push(dateFmt.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
    // });
    
    // return this._http.get("http://localhost:8000/sample-weather.json")
    //   .pipe(map(result => result));

  }

  
}
