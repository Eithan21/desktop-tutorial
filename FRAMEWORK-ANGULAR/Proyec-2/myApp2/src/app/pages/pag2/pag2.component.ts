import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TitulosComponent } from '../../componentes/titulos/titulos.component';
import { PokemonService } from '../../servicios/pokemon.service';
import { BotonUpcComponent } from '../../componentes/boton-upc/boton-upc.component';


@Component({
  selector: 'app-pag2',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TitulosComponent, BotonUpcComponent ],
  templateUrl: './pag2.component.html',
  styleUrl: './pag2.component.scss'
})
export class Pag2Component {
  pokemon : any; 
  constructor(
    private PokemonService: PokemonService, 
    private router: Router,) {
   }
  ngOnInit() {
    this.webservicegetestudiantes();
  }
  public webservicegetestudiantes(){
    this.PokemonService.getpokemon().subscribe(data=> {
      this.pokemon = data.results;
      console.log(data);

    })
  }
}

