import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { FlightsComponent } from './flights/flights.component';
import { AddflightComponent } from './flights/addflight/addflight.component';
import { AddstatusComponent } from './flights/addstatus/addstatus.component';

import { FlightService } from './flights/flight.service';
import { AirlineService } from './flights/airline.service';
import { ProfileComponent } from './home/profile/profile.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search';
import { OrderByPipe } from './pipe/orderby';
import {AddflightService} from './flights/addflight/addflight.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    FlightsComponent,
    AddflightComponent,
    AddstatusComponent,
    ProfileComponent,
    SearchPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    FlightService,
    AirlineService,
    AddflightService],
    bootstrap: [AppComponent]
})
export class AppModule { }
