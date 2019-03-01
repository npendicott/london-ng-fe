// https://www.youtube.com/watch?v=_05v0mrNLh0
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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
    // Headers
    let headers = new HttpHeaders()
      .set("Mac-ID", macId);

    // Query
    let params = new HttpParams()
      .set('start', startDate)
      .set('end', endDate);

    // TODO: Config filez
    this.res = this._http.get("http://localhost:9090/readings/daily", { 
    // this.res = this._http.get("http://dns.or.ip.here:9090/readings/daily", { 
        params, 
        headers,
      })
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
