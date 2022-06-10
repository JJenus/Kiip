import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(){
    
  }

  public isLoggedIn(): boolean{
    return true;
  }

  public login(user: User){

  }
}
