import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  newUser : User = new User()
  
  constructor() { }

  createUser(){
    
  }

  ngOnInit() {
  }

}
