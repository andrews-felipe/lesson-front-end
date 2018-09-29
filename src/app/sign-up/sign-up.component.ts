import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  nUser : User = new User()

  constructor(private service : AuthService) { }

  ngOnInit() {
  }


  signUp(){
    console.log(this.nUser)
    if(this.nUser.email != '' && this.nUser.email && this.nUser.password && this.nUser.password != ''){
    this.service.addUser(this.nUser)
    }
    else{
      alert('Preencha todos os dados!')
    }
  }

}
