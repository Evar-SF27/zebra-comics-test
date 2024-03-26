import { Component, Input } from '@angular/core';
import { Genres } from '../genres';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent {
  @Input() genre!: Genres;
}
