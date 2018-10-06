import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "./auth.service";
import { patch } from "webdriver-js-extender";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

export const routes : Routes = [
    {   
        path : 'home', 
        component : HomeComponent, 
        canActivate : [AuthService] 
    },
    {   path : 'cadastro' , 
        component : SignUpComponent
    },

    {   path : 'login' , 
        component : LoginComponent
    },
    {
        path : '' , 
        redirectTo : 'login', 
        pathMatch : 'full'
    },
    {
        path : '**' , 
        redirectTo : 'login', 
        pathMatch : 'full'
    },
    
]