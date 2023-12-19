import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Menu2Component } from '@angular-monorepo/menu2';
import { PostsService } from './services/posts/posts.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,Menu2Component,CommonModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'appY';
  Posts : any; 
  constructor(
    private PostsService: PostsService, 
    private router: Router,) {
   }
  ngOnInit() {
    this.webservicegetPosts();
  }
  public webservicegetPosts(){
    this.PostsService.getPosts().subscribe(data=> {
      this.Posts = data;
      console.log(data);

    })
  }
}
