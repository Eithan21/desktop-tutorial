import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MegaMenuComponent } from '@actividad-5/mega-menu';
import { FilterTableComponent } from '@actividad-5/filter-table';
import { UsersService } from './services/users/users.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MegaMenuComponent, FilterTableComponent],
  selector: 'actividad-5-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-x';
  public ListaUsuarios : any;
  constructor (private userservice:UsersService){
  } 
  ngOnInit() {
    this.WebServiceGetUsers();
  }
  public WebServiceGetUsers(){
    this.userservice.getUsers()
      .subscribe(data =>{
        this.ListaUsuarios = data;
        console.log(this.ListaUsuarios);
    })
  }
}
