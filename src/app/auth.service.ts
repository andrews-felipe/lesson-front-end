import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class AuthService {

  users : Array<User> = new Array<User>();

  constructor() { }


  addUser(user: User){
    this.users.push(user)
  }

  hasUser(user : User) : Boolean{
    this.users.forEach((res)=>{
      if(res.email === user.email && res.password === user.password){
        return true
      }
    })
    return false
  }

}
