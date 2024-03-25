import { Component, Input } from '@angular/core';
import { Poster } from '../poster';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [NgIf],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.css'
})
export class PosterComponent {
  @Input() poster!: Poster;
}
