import { Component, Input } from '@angular/core';
import { HeroAds } from '../hero-ads';

@Component({
  selector: 'app-hero-ads',
  standalone: true,
  imports: [],
  templateUrl: './hero-ads.component.html',
  styleUrl: './hero-ads.component.css'
})
export class HeroAdsComponent {
  @Input() ads!: HeroAds;
}
