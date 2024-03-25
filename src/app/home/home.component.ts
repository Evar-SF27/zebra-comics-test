import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { Card } from '../card';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    RecommendationsComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recommendedList: Card[] = [
    {
      id: 0,
      image: null,
      newDay: true,
      newWeek: false,
      name: 'Chronicles of Totemism'
    },
    {
      id: 1,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Picaso and The First Dragon'
    },
    {
      id: 2,
      image: null,
      newDay: false,
      newWeek: true,
      name: 'Doors or Windows?'
    },
    {
      id: 3,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Retrograde'
    },
    {
      id: 4,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Alice and the Chapters of WinterFel'
    },
  ];
  
}
