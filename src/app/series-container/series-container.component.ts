import { Component, Input } from '@angular/core';
import { Series } from '../series';
import { TopSeriesComponent } from '../top-series/top-series.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-series-container',
  standalone: true,
  imports: [
    TopSeriesComponent,
    NgFor
  ],
  templateUrl: './series-container.component.html',
  styleUrl: './series-container.component.css'
})
export class SeriesContainerComponent {
  @Input() seriesList!: Array<Series>;
}
