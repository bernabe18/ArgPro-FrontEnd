import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../components/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class SpersonaService {
//conectar back-end para poder concatenar las url de los end point a
//nuestra variable URL que va a tener el localhost y su puerto mas la entidad
URL ='http://localhost:8080/personas/';

constructor(private http:HttpClient) { }


public getPersona(): Observable<persona>{
return this.http.get<persona>(this.URL+'traer/perfil');
}

}
