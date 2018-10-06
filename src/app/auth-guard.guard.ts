import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  
  constructor(private service : AuthService ){}
  
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      /**
       * Método condicional da rota
       */
      if(this.service.isLogged()){
        return true;
      }else{
        return false;
      }
    
      
  }

  
}
