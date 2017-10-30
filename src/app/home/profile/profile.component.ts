import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  
  constructor(private auth: AuthService) {
     
   }

  ngOnInit() {
    const promise = this.auth.getProfile();
    promise.then(profile => {
        console.log(profile);
      this.profile = profile;
    });
  }

}
