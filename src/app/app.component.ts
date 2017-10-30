import { Component , OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
   profile: any;


  constructor(public auth: AuthService) {
    auth.handleAuthentication();
    const promise = this.auth.getProfile();
    promise.then(profile => {
        console.log(profile);
      this.profile = profile;
    });
  }
ngOnInit(){

}
}
