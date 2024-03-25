import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent
  ],
  template: `
    <section>
      <div class='header'>
        <app-navbar></app-navbar>
        <app-hero></app-hero>
      </div>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
