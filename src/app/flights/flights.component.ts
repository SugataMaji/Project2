import { Component, OnInit, Input, OnChanges, DoCheck} from '@angular/core';
import { FlightService } from './flight.service';
import {AddflightService} from './addflight/addflight.service';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  private searchData: string;

  flightlist: Array<Object> =[];
  users=[];
  

  constructor(private flight: FlightService,  private service:AddflightService) { }

  ngOnInit() {
    this.users = this.service.getflight();
    this.searchData = '';
    this.flight.getflights()
    .subscribe(res =>{
      this.flightlist=res;
    });
 
  }
  

}

