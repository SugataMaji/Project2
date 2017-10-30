import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AirlineService {

  constructor(private http1 : Http, private http2 : Http) { }

  getairline(){
    return this.http1.get('../assets/airlines.json')
    .map(res1 => res1.json());
  }
  getsatus(){
    return this.http2.get('../assets/status.json')
    .map(res1 => res1.json());
  }
}
