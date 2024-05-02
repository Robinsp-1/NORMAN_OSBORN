import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [

    { path: '',title:"LogIn Page", component: LoginComponent },
    {path: 'inicio', title:"Inicio", component:InicioComponent }


];
