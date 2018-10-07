import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';


/**
 * constante do tipo Routes, que guarda uma lista de rotas definidas que será exportada para o modulo
 */

export const routes : Routes = [

    {path : 'home', component : HomeComponent},
    {path : 'login', component : LoginComponent},   
    {path : 'cadastro', component : CadastroComponent},
    {path : '', redirectTo : 'login', pathMatch :'full'}
]