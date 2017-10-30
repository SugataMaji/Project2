import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { FlightsComponent } from './flights/flights.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AddflightComponent } from './flights/addflight/addflight.component';
import { AddstatusComponent } from './flights/addstatus/addstatus.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {path: 'flights', component: FlightsComponent }, 
  {path: 'profile', component: ProfileComponent },
  {path: 'addflight', component: AddflightComponent },
  {path: 'status', component: AddstatusComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }  
];
