import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from './../../service/experiencia.service';
import { TokenService } from './../../service/token.service';
import { Experiencia } from './../model/experiencia';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private serviexpe: ExperienciaService, private tokenServi: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    // saber si esta logeado
    if (this.tokenServi.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }
  cargarExperiencia(): void {
    this.serviexpe.list().subscribe(data => {
       this.experiencias = data;
      //el array tiene datos
       console.log(this.experiencias);
    })
  }
}

