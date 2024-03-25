import { Component } from '@angular/core';
import { HeroAds } from '../hero-ads';
import { HeroAdsComponent } from '../hero-ads/hero-ads.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, HeroAdsComponent],
  templateUrl: `./hero.component.html`,
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  adsList: HeroAds[] = [
    {
      id: 0,
      image: 'https://s3-alpha-sig.figma.com/img/a317/eb5e/2db97d0f3257b6a0ce299acdaa862b10?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PECZtyyMU3hNdYsjDTa7mUUyADXA~0610V0kAsB0480fMEi0jOoJpSUYsQjard8jaWce8q0BfbRi2rQCAj1cHjr8IIGaNI3SlRTJCIP3CkQtCyTAcIPf71f9GqQCMSup1i1Mz~gPwDS6deS0mob-9NHKEAEUbq4xujsoT2k1A62eBaPi2gbxksRx0GODTFydk6yFWtpWVJhXCg0h51ppFwKQKop-SYsoZFiFllGywyRGdRXK-t0p2jXhhblPIDwTdWE~GDNuqgohlAwe1GbrQA-Rok45ynew5Y92vMUoX5Qq0LRVV0LtjhkR0Wt0bcK4JcIDL80RDcBk3GvDtLoyTg__',
      progress: 30
    },
    {
      id: 1,
      image: 'https://s3-alpha-sig.figma.com/img/e0c6/16db/209dc6d01fe034ddf01863853ff9e9d2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JejnloDRnsTSfc8nvHdN~xmo~-C~8VPbgd2YEpGZvMYu9bOXzkCAZGe25yLOFcjpxstY6yEFdJb6SJHnpFytD-BODd0IlngB0CkFJFp~j7L2wQ3R~9-oIkUA3x752~QK7MWuNm5FOZLblUALjh56qfgLH88vijiu8IRSNaQQ-aAC2kd4PypZL6d5WMRoM9WHJnqze3hBSzJifWDDuCzTsEr-HvHAs9hqYM~JZ-Bl8Y7bILBfewENYqUQl3oKUjYv2SlSR2QLCFci5ghzJZzaYRDbRBKLAtFexBfVj1NMb3K6xbbfcC2fCxnO6oUOUw2dPfoBHZDZBKjQom0uKWgj2g__',
      progress: 20
    },
    {
      id: 2,
      image: 'https://s3-alpha-sig.figma.com/img/a317/eb5e/2db97d0f3257b6a0ce299acdaa862b10?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PECZtyyMU3hNdYsjDTa7mUUyADXA~0610V0kAsB0480fMEi0jOoJpSUYsQjard8jaWce8q0BfbRi2rQCAj1cHjr8IIGaNI3SlRTJCIP3CkQtCyTAcIPf71f9GqQCMSup1i1Mz~gPwDS6deS0mob-9NHKEAEUbq4xujsoT2k1A62eBaPi2gbxksRx0GODTFydk6yFWtpWVJhXCg0h51ppFwKQKop-SYsoZFiFllGywyRGdRXK-t0p2jXhhblPIDwTdWE~GDNuqgohlAwe1GbrQA-Rok45ynew5Y92vMUoX5Qq0LRVV0LtjhkR0Wt0bcK4JcIDL80RDcBk3GvDtLoyTg__',
      progress: 10
    },
    {
      id: 3,
      image: 'https://s3-alpha-sig.figma.com/img/e0c6/16db/209dc6d01fe034ddf01863853ff9e9d2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JejnloDRnsTSfc8nvHdN~xmo~-C~8VPbgd2YEpGZvMYu9bOXzkCAZGe25yLOFcjpxstY6yEFdJb6SJHnpFytD-BODd0IlngB0CkFJFp~j7L2wQ3R~9-oIkUA3x752~QK7MWuNm5FOZLblUALjh56qfgLH88vijiu8IRSNaQQ-aAC2kd4PypZL6d5WMRoM9WHJnqze3hBSzJifWDDuCzTsEr-HvHAs9hqYM~JZ-Bl8Y7bILBfewENYqUQl3oKUjYv2SlSR2QLCFci5ghzJZzaYRDbRBKLAtFexBfVj1NMb3K6xbbfcC2fCxnO6oUOUw2dPfoBHZDZBKjQom0uKWgj2g__',
      progress: 0
    },
    {
      id: 4,
      image: 'https://s3-alpha-sig.figma.com/img/a317/eb5e/2db97d0f3257b6a0ce299acdaa862b10?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PECZtyyMU3hNdYsjDTa7mUUyADXA~0610V0kAsB0480fMEi0jOoJpSUYsQjard8jaWce8q0BfbRi2rQCAj1cHjr8IIGaNI3SlRTJCIP3CkQtCyTAcIPf71f9GqQCMSup1i1Mz~gPwDS6deS0mob-9NHKEAEUbq4xujsoT2k1A62eBaPi2gbxksRx0GODTFydk6yFWtpWVJhXCg0h51ppFwKQKop-SYsoZFiFllGywyRGdRXK-t0p2jXhhblPIDwTdWE~GDNuqgohlAwe1GbrQA-Rok45ynew5Y92vMUoX5Qq0LRVV0LtjhkR0Wt0bcK4JcIDL80RDcBk3GvDtLoyTg__',
      progress: 0
    },
  ];
}
