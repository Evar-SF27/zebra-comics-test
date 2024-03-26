import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { Card } from '../card';
import { NgFor, NgIf } from '@angular/common';
import { ResumeComponent } from '../resume/resume.component';
import { Resume } from '../resume';
import { ExtraComponent } from '../extra/extra.component';
import { Extra } from '../extra';
import { Poster } from '../poster';
import { PosterComponent } from '../poster/poster.component';
import { SeriesContainerComponent } from '../series-container/series-container.component';
import { Series } from '../series';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    RecommendationsComponent,
    ResumeComponent,
    ExtraComponent,
    PosterComponent,
    SeriesContainerComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recommendedList: Card[] = [
    {
      id: 0,
      image: null,
      newDay: true,
      newWeek: false,
      name: 'Chronicles of Totemism'
    },
    {
      id: 1,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Picaso and The First Dragon'
    },
    {
      id: 2,
      image: null,
      newDay: false,
      newWeek: true,
      name: 'Doors or Windows?'
    },
    {
      id: 3,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Retrograde'
    },
    {
      id: 4,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Alice and the Chapters of WinterFel'
    },
  ];

  resumeList: Resume[] = [
    {
      id: 0,
      image: null,
      progress: 30,
      episode: 3,
      name: 'The Sting'
    },
    {
      id: 1,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Njoku'
    },
    {
      id: 2,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Love at First Fight'
    },
    {
      id: 3,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Retrograde'
    },
    {
      id: 4,
      image: null,
      progress: 30,
      episode: 3,
      name: 'My Breakup Ended the World'
    },
    {
      id: 5,
      image: null,
      progress: 30,
      episode: 3,
      name: 'The Artist'
    },
    {
      id: 6,
      image: null,
      progress: 30,
      episode: 3,
      name: 'Retrograde'
    },
  ];

  extraList: Extra[] = [
    {
      id: 0,
      image: "https://s3-alpha-sig.figma.com/img/37dd/0947/c56696961b7f87fc730ff77684c608c1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHAD7-DWhcFIla~tp5O19OpRvnPon5tGCrz5VeuanaBZ3rWJHs5AHIX4nypWSeNfti8mdN3gw7vT75Rxh4Yp0D686r~ioGbj11VZfV2w0rtovSi2SfrnYmFEaV~LnX8FWrrPc~P5TJ~ZZlcm5ASGBtxom60kqQI9Zp5jeHAJ7BN53zvzfcU3XrWzZ~ZNoxT6CL~uh6b9ZmtpSMkAguHaF1I3mS9sB5gTxr~IAFmFXsYHQtcut8SzgyY6BiTC5D7YAcy7lGby21Itx98ECpUPnV~enptzP1zeStnkHrb~nb3YHqa7maK5xW9DYSfQe23ZHBsbPwVw6mq6hXIlxsdznw__",
      day: "01",
      month: "Jan",
      price: 35.99,
      title: "https://s3-alpha-sig.figma.com/img/5ec3/ebea/83a287bd4d01360a90d9ee78acea1444?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5mUJi~kna6q6ux3wJZHt-CaFa~RxPkRoSPTtUS4P41bkTosR2YA~v-qoacKs52s0ExUTten1AuPs3hqXRWHbLyBGH9c-lxViL-yY4XqQfa7PgfmBbZOu7nL7XU7y-i884NG3HTcyC02zV327UxYXefcMw0YsxQsWp1faGp7bTAw4XK7w5jGfRhZAy6JIxgp3G4TO93C7n-ppU34K29N-zb8H--rDFurCrrBVz8Bv6UiMoSPXDQrV3Xw-Aavc0YzAsOa2yptOlCTGwXe35wugKlX4nunCPL4L4h-1WNM1Ett3m2mDxuhLyWIs68mJjK5dK22bqJm2UEp~W4BCHXX5w__",
      description: "This is the comic synopsis which is clickable to open more details about it. Let's add some new text here."
    },
    {
      id: 1,
      image: "https://s3-alpha-sig.figma.com/img/8857/b42e/870d3b132c2c3d10137e2a5e1e9774fe?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYLOjAClw1k7-DxSqxIuj0uHlX9bfScPM2J127jgYTY1PCQibBJ3YA4tqUwfDXoAvE3~-OlEC92tAnJG27jsJqNAosHp8Zifph2b2kZGyCC7FvfP0aj2p8xd19wc3MynU-Sy2CnLWy15YGdFgvP3mk7h~3vto2lqt-3mxP-EqgeCLG1Rlfr2dqhVYpLCdbEor7Di9kkS0EmJyZsAnTw9XiI6waSVnOVR3i0UWtPMd5y4rATcYe4PSsD9MEjyh-S53ncrLQ2P8l-MfjT8GfWK4lPpf~tJGLIpJfkO7yqsx8sR3MKvv-sSHlBC27oNRR~fvHpaThCCNN2kVdGl2zCkOg__",
      day: "02",
      month: "Jan",
      price: 35.99,
      title: "https://s3-alpha-sig.figma.com/img/c1b4/c460/97422b3bd18eb1a7d071e25ab9addce3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YuU12HLWezjoQV~r4uVMD7qBO4jiZNbusxEIsGHDelki7pl14CDV2Aiza1oTrDfvMwfpJuvIegs8Yu5MTBtnu8YrFBuN2SJYcg8SjQKFt7ObSeG~Ji3b6cNHeP6ygOjRvEv6z7KDA-fUjRrevsEN9Z4bDdTAqqgDouI1wFiCOB9R3xiIpYD~s3n5SlOmVAhYbUABywDJ78YTFSCtsH1oLCMjC8kiV4wxfePtWTzxH0x1n55fQDGqr1CoAa~z1XuIVyKSPC8argf2BuQI~GPCV-hwE0s76IcF~ylGfy8iX5L42p-5pJdYnw0Q98g3XTjKNTIv-JnkfTQPMtI88hQWFA__",
      description: "This is the comic synopsis which is clickable to open more details about it. Let's add some new text here."
    }
  ];

  startList: Card[] = [
    {
      id: 0,
      image: null,
      newDay: true,
      newWeek: false,
      name: 'Chronicles of Totemism'
    },
    {
      id: 1,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Picaso and The First Dragon'
    },
    {
      id: 2,
      image: null,
      newDay: false,
      newWeek: true,
      name: 'Doors or Windows?'
    },
    {
      id: 3,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Retrograde'
    },
    {
      id: 4,
      image: null,
      newDay: false,
      newWeek: false,
      name: 'Alice and the Chapters of WinterFel'
    },
  ];

  posterList: Poster[] = [
    {
      id: 0,
      name: 'BEASTS OF TAZETI',
      newDay: true,
      newWeek: false,
      image: "https://s3-alpha-sig.figma.com/img/37dd/0947/c56696961b7f87fc730ff77684c608c1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHAD7-DWhcFIla~tp5O19OpRvnPon5tGCrz5VeuanaBZ3rWJHs5AHIX4nypWSeNfti8mdN3gw7vT75Rxh4Yp0D686r~ioGbj11VZfV2w0rtovSi2SfrnYmFEaV~LnX8FWrrPc~P5TJ~ZZlcm5ASGBtxom60kqQI9Zp5jeHAJ7BN53zvzfcU3XrWzZ~ZNoxT6CL~uh6b9ZmtpSMkAguHaF1I3mS9sB5gTxr~IAFmFXsYHQtcut8SzgyY6BiTC5D7YAcy7lGby21Itx98ECpUPnV~enptzP1zeStnkHrb~nb3YHqa7maK5xW9DYSfQe23ZHBsbPwVw6mq6hXIlxsdznw__"
    },
    {
      id: 1,
      name: 'SHORTER HEADING',
      newDay: false,
      newWeek: false,
      image: null
    },
    {
      id: 2,
      name: 'NOTICE BACKGROUND OVERLAY',
      newDay: true,
      newWeek: false,
      image: null
    },
  ];

  actionSeries: Series[] = [
    {
      id: 1,
      image: null,
      name: 'The Guy Upstairs and a Longer Title as Such',
      views: 680
    },
    {
      id: 2,
      image: null,
      name: 'A Reverie with Nana',
      views: 680
    },
    {
      id: 3,
      image: null,
      name: 'Love at First Fight',
      views: 680
    }
  ];

  romanceSeries: Series[] = [
    {
      id: 1,
      image: null,
      name: 'The Guy Upstairs and a Longer Title as Such',
      views: 680
    },
    {
      id: 2,
      image: null,
      name: 'The Guy Upstairs and a Longer Title as Such',
      views: 680
    },
    {
      id: 3,
      image: null,
      name: 'The Guy Upstairs and a Longer Title as Such',
      views: 680
    }
  ];
}
