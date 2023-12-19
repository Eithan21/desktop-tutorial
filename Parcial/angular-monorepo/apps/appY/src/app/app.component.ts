import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Menu2Component } from '@angular-monorepo/menu2';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,Menu2Component],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'appY';
}
