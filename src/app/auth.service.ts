import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class AuthService {
  /**
   * Lista de Usuários do sistema
   * Essa lista Array tipo User, contém um usuário.
   */
  private users : Array<User> = [
    {nome : 'andrews', email : 'adm@adm', password : '123'}
  ]

  constructor() { }
  /**
   * Método para verificar se o usuário recebido contém na lista definida acima ( users )
   * usando escopo simples
   * @param user 
   */
  isValid(user : User){
    let result : boolean = false 
    this.users.forEach(element=>{
      if(element.email === user.email && element.password === user.password){
        result = true
      }
    })
    return result
  }

}