import { Component, Input } from '@angular/core';
import { NewRelease } from '../new-release';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-release',
  standalone: true,
  imports: [NgIf],
  templateUrl: './new-release.component.html',
  styleUrl: './new-release.component.css'
})
export class NewReleaseComponent {
  @Input() release!: NewRelease;

  showFullDescription: boolean = false;

  toggleDescription() {
      this.showFullDescription = !this.showFullDescription;
  }
}
