import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EstudiantesService } from '../../servicios/estudiantes.service';
import { TitulosComponent } from '../../componentes/titulos/titulos.component';
import { BotonUpcComponent } from '../../componentes/boton-upc/boton-upc.component';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [RouterOutlet, CommonModule,TitulosComponent, BotonUpcComponent ],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.scss'

})
export class Pag1Component {
  estudiantes : any; 
  constructor(
    private EstudiantesService: EstudiantesService, 
    private router: Router,) {
   }
  ngOnInit() {
    this.webservicegetestudiantes();
  }
  public webservicegetestudiantes(){
    this.EstudiantesService.getestudiantes().subscribe(data=> {
      this.estudiantes = data;
      console.log(data);

    })
  }
}
