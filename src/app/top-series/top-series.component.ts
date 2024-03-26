import { Component, Input } from '@angular/core';
import { Series } from '../series';

@Component({
  selector: 'app-top-series',
  standalone: true,
  imports: [],
  templateUrl: './top-series.component.html',
  styleUrl: './top-series.component.css'
})
export class TopSeriesComponent {
  @Input() series!: Series;
}
