import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MenuComponent } from '@angular-monorepo/menu';
import { UsersService } from './services/users/users.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuComponent, CommonModule, RouterOutlet],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'appX';
  Users : any; 
  constructor(
    private UsersService: UsersService, 
    private router: Router,) {
   }
  ngOnInit() {
    this.webservicegetUser();
  }
  public webservicegetUser(){
    this.UsersService.getUser().subscribe(data=> {
      this.Users = data;
      console.log(data);

    })
  }
}
