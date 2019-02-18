import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Other: filter, catcherror, mergeMap
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http: HttpClient) { }
  
  dailyForcast() {
    // return this._http.get("https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1")
    //   .pipe(map(result => result));
    return this._http.get("http://localhost:8000/sample-weather.json")
      .pipe(map(result => result));

  }
}

