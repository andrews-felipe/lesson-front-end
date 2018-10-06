import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nUser : User = new User()

  constructor(private service : AuthService, private route: Router) { }

  ngOnInit() {
  }

  Validatelogin(){
    if(this.nUser.email != '' && this.nUser.email && this.nUser.password && this.nUser.password != ''){
      this.login()
    }
    else{
      alert('E-mail ou Senha Incorretos')
    }
  }

  login(){
    if(this.service.signIn(this.nUser)){
      this.route.navigate(['/home'])
    }
    else{
      alert('E-mail ou Senha Incorretos 222')
    }
  }
  }



  


