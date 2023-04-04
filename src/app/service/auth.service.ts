import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from './../components/model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from './../components/model/login-usuario';
import { JwtDto } from '../components/model/jwt-dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL='http://localhost:8080/auth/';

constructor(private HttpClient: HttpClient) { }


public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
return this.HttpClient.post<any>(this.authURL+'nuevo',nuevoUsuario);
}

public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
  return this.HttpClient.post<JwtDto>(this.authURL+'login', loginUsuario);
}

}
