import { Injectable } from '@angular/core';

@Injectable()
export class AddflightService {

  constructor() { }

  getflight(){
   const users= localStorage.getItem("users");
   if(users){
     return JSON.parse(users);
   }
   return[];
  }
  addflight(user){
    const usersformdata= localStorage.getItem("users");
     if(usersformdata){
       let users = JSON.parse(usersformdata);
       users.push(user);
       localStorage.setItem("users", JSON.stringify(users));
     }
     else{
       localStorage.setItem("users", JSON.stringify([]));
     }
  }
}
