import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from './../model/login-usuario';
import { TokenService } from './../../service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  isLogged=false;
  isLogginFail=false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!:string;
  password!:string;
  roles:string[]=[];
  errMsj!:string;


  constructor(private tokenService:TokenService ,private authSrvice:AuthService,private router:Router){

  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLogginFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);

        this.authSrvice.login(this.loginUsuario).subscribe(data => {
        this.isLogged=true;
        this.isLogginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['porfolio']);
      },err=>{
        this.isLogged=false;
        this.isLogginFail=true;
        this.errMsj=err.error.mensaje;
        console.log(this.errMsj);
        console.log("error en onlogin")
      });
  }

}
