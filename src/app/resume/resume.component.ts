import { Component, Input } from '@angular/core';
import { Resume } from '../resume';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  @Input() resume!: Resume;
}
