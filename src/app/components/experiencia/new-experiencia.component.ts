import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from './../../service/experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';



@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreExp: string = "";
  descripcion: string = "";


  constructor(private serviexpe: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const expe = new Experiencia(this.nombreExp, this.descripcion);

     this.serviexpe.save(expe).subscribe({

      next: (data) => {
         alert('Experiencia cargada');
        this.router.navigate(['porfolio']);         
      },
      error: (err) => {
        alert('Fallo en la funcion onCreate');
        this.router.navigate(['porfolio']);
      }
    });
  




  }

}
