import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from '@angular-monorepo/nav';
import { CommentsService } from './services/comments/comments.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavComponent, CommonModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'appZ';
  Comments : any; 
  constructor(
    private CommentsService: CommentsService, 
    private router: Router,) {
   }
  ngOnInit() {
    this.webservicegetPosts();
  }
  public webservicegetPosts(){
    this.CommentsService.getPosts().subscribe(data=> {
      this.Comments = data;
      console.log(data);

    })
  }
}
