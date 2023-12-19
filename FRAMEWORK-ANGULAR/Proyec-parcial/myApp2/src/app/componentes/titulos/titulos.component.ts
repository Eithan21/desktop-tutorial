import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulos',
  standalone: true,
  imports: [],
  templateUrl: './titulos.component.html',
  styleUrl: './titulos.component.scss'
})
export class TitulosComponent {
  @Input() myTitulo : string = "No hay nada";
}
