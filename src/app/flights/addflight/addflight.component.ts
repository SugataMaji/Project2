import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AirlineService } from '../airline.service';
import {AddflightService} from './addflight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
    addflightform: FormGroup;
    airlinelist : Array<Object> = [];
    users=[];
  constructor(public router: Router, private airlines : AirlineService, private service:AddflightService) { }

  ngOnInit() {
   this.users = this.service.getflight();
   this.addflightform = new FormGroup({
      FlightFrom: new FormControl(),
      FlightTo: new FormControl(),
      Airlines: new FormControl(),
      Departdate: new FormControl(),
      Returndate: new FormControl()
   });
   this.airlines.getairline()
   .subscribe(res1=>{
     this.airlinelist=res1;
     console.log(this.airlinelist);
   });
  }
  
  addflightdetails(){
    if(this.addflightform.valid){
      this.service.addflight(this.addflightform.value);
      this.users = this.service.getflight();
         this.router.navigate(['/']);
    }
  }
}
