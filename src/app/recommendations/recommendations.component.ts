import { Component, Input } from '@angular/core';
import { Card } from '../card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [NgIf],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  @Input() recommended!: Card;
}
