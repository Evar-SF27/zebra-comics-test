import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { Card } from '../card';
import { NgFor, NgIf } from '@angular/common';
import { ResumeComponent } from '../resume/resume.component';
import { Resume } from '../resume';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    RecommendationsComponent,
    ResumeComponent,
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

  resumeList: Resume[] = [
    {
      id: 0,
      image: null,
      progress: 30,
      episode: 3,
      name: 'The Sting'
    },
    {
      id: 1,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Njoku'
    },
    {
      id: 2,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Love at First Fight'
    },
    {
      id: 3,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Retrograde'
    },
    {
      id: 4,
      image: null,
      progress: 30,
      episode: 3,
      name: 'My Breakup Ended the World'
    },
    {
      id: 5,
      image: null,
      progress: 30,
      episode: 3,
      name: 'The Artist'
    },
    {
      id: 6,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Retrograde'
    },
  ];

}
