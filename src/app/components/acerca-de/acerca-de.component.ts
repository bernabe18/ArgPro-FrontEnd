import { Component, OnInit } from '@angular/core';
import { SpersonaService } from 'src/app/service/spersona.service';
import { persona } from '../model/persona.model';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //intancia del objeto
  persona: persona = new persona("","","");
  //inyectamos al servicio de persona para poder utilizar sus metodos
  constructor(public spersona:SpersonaService) { }

  ngOnInit(): void {
    //hacemos que subcribe este pendiente al cambio de la data
    this.spersona.getPersona().subscribe(data => {this.persona =data})

  }

}
