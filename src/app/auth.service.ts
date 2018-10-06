import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class AuthService {


  /**
   * Predefined users
   */
  users : Array<User> = [
    {
      name : '',
      email : 'admin@admin',
      password : '123'
    }
  ]

  private loginValid : boolean
    
  constructor() { }

  validateUser(){
    this.loginValid = true
  }

  isLogged(){
    return this.loginValid
  }


  addUser(user: User){
    this.users.push(user)
  }

  signIn(user : User) : Boolean{
    this.users.forEach((res)=>{
      if(res.email === user.email && res.password === user.password){
        this.validateUser()
        return true
      }
    })
    return false
  }

}
