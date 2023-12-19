import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MateriasServiceService } from '../../servicios/materias-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule ],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.scss'
})
export class Pag1Component {
  public materias!: any[];
  constructor(
    private MateriasService: MateriasServiceService, 
    private router: Router,) {
   }
  ngOnInit() {
    this.webservicegetmateria();
  }
  public webservicegetmateria(){
    this.MateriasService.getmaterias().subscribe(data=> {
      this.materias = data;
      console.log(data);

    })
  }
  
}
