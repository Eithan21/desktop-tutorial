import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-upc',
  standalone: true,
  imports: [],
  templateUrl: './boton-upc.component.html',
  styleUrl: './boton-upc.component.scss'
})
export class BotonUpcComponent {
  @Input() TextoBoton:any="wait";
  @Input() AnchoBoton:any="300px";
}
