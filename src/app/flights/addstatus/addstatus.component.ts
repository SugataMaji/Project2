import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { AirlineService } from '../airline.service';
import {AddflightService} from '../addflight/addflight.service';

@Component({
  selector: 'app-addstatus',
  templateUrl: './addstatus.component.html',
  styleUrls: ['./addstatus.component.css']
})
export class AddstatusComponent implements OnInit {
 private searchData: string;
   private searchDataTo: string;

  flightlist: Array<Object> =[];
   airlinestatus : Array<Object> = [];
   users=[];
  

  constructor(private flight: FlightService,  private airlines : AirlineService,  private service:AddflightService) { }

  ngOnInit() {
    this.users = this.service.getflight();
    this.searchData = '';
    this.flight.getflights()
    .subscribe(res =>{
      this.flightlist=res;
    });
 this.airlines.getsatus()
   .subscribe(res1=>{
     this.airlinestatus=res1;
     console.log(this.airlinestatus);
   });
  }
  
}
