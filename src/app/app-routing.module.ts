import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login',component:IniciarSesionComponent},
  {path:'newExp',component:NewExperienciaComponent},
  {path:'porfolio',component:PorfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
