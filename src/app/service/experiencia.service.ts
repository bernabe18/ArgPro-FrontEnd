import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../components/model/experiencia';


@Injectable({
  providedIn:'root'
})
export class ExperienciaService {

  experienciaURL="http://localhost:8080/explab/"

  constructor(private httpClient: HttpClient) { }

  public list():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.experienciaURL+'list');
  }

  public detail(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.experienciaURL+`detail/${id}`);

  }
  public save(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.experienciaURL+'create',experiencia);
  }

  public update(id:number,experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.experienciaURL+`update/${id}`,experiencia);

  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.experienciaURL+`delete/${id}`);
  }

}
