import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';

const routes: Routes = [
  {path:'porfolio',component:PorfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
//  {path:'/',redirectTo:'iniciar-sesion',pathMatch:'full'},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
