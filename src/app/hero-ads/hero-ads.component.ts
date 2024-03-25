import { Component, Input } from '@angular/core';
import { HeroAds } from '../hero-ads';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-ads',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero-ads.component.html',
  styleUrl: './hero-ads.component.css'
})
export class HeroAdsComponent {
  @Input() ads!: HeroAds;
}
