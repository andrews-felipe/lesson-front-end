import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nUser : User = new User()

  constructor(private service : AuthService) { }


  Validatelogin(){
    if(this.nUser.email != '' && this.nUser.email && this.nUser.password && this.nUser.password != ''){
        this.login()
      }
    else{
      alert('E-mail ou Senha Incorretos')
    }
  }

  login(){
    if(this.service.hasUser(this.nUser)){
      
    }
  }

  ngOnInit() {
  }

}
