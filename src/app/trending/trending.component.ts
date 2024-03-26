import { Component, Input } from '@angular/core';
import { Trending } from '../trending';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {
  @Input() trending!: Trending;
}
