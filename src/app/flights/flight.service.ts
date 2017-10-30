import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class FlightService {

  constructor(private http : Http) { }

  getflights(){
    return this.http.get('../assets/flightlist.json')
    .map(res => res.json());
  }
  saveRetur(data){
        this.http.post('../assets/flightlist.json', JSON.stringify(data))

  }



}
