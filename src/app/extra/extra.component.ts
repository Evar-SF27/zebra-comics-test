import { Component, Input } from '@angular/core';
import { Extra } from '../extra';

@Component({
  selector: 'app-extra',
  standalone: true,
  imports: [],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent {
  @Input() extra!: Extra;
}
