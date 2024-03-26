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
import { Trending } from '../trending';
import { TrendingComponent } from '../trending/trending.component';
import { NewRelease } from '../new-release';
import { NewReleaseComponent } from '../new-release/new-release.component';
import { Genres } from '../genres';
import { GenresComponent } from '../genres/genres.component';

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
    TrendingComponent,
    NewReleaseComponent,
    GenresComponent,
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

  trendingList: Trending[] = [
    {
      id: 1,
      name: 'Chronicles of Totemism',
      image: null,
      category: ['Action', 'Comedy'],
      new: true,
      views: '10.2k'
    },
    {
      id: 2,
      name: 'Chronicles of Totemism',
      image: null,
      category: ['Action', 'Comedy'],
      new: true,
      views: '10.2k'
    },
    {
      id: 3,
      name: 'Chronicles of Totemism',
      image: null,
      category: ['Action', 'Comedy'],
      new: true,
      views: '10.2k'
    },
    {
      id: 4,
      name: 'Chronicles of Totemism',
      image: null,
      category: ['Action', 'Comedy'],
      new: true,
      views: '10.2k'
    },
    {
      id: 5,
      name: 'Chronicles of Totemism',
      image: null,
      category: ['Action', 'Comedy'],
      new: true,
      views: '10.2k'
    },
  ];

  releaseList: NewRelease[] = [
    {
      id: 0,
      progress_one: 100,
      progress_two: 100,
      progress_three: 79,
      image: 'https://s3-alpha-sig.figma.com/img/f94d/6ee0/c7bc64e8ef9fae783a417595a547c3ec?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XFkGHIw1AL0fE80akVtquywx6R~TANKp02S7uigwkcIYFP4iznslRA5aSq3YIUHbByZzFn6ZeSpqpmYoNjp9G5ej84ThRrkgQ1VobkDLFmxYUq3UM-CrqjCaAjVM-cNX5woUUj-buxGglOnzTDsS5C0I7U~elSBSrUebIIWTptwbbK3uokGVNrA~AO8Dct~IzsY9zv5VWpn8-t36xxyAXq8Or~PyOR2lziam4Hiju7PkRBfZAVCr~V1k9AVGyHhJXUjSRrcN87lRLM9hTjDev1DXKXZb9TelmlYRDJh~1eTp1ZAfimUUri5l15k9FWm3~CGVtNNPszGe6M--NRsIIQ__',
      new: true,
      title: 'https://s3-alpha-sig.figma.com/img/45e8/4241/98ac133213097010f5d8539240913ccc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Te7w8zmGA7rl-J70xb0fyrtryEsvO3zCGTqKWS1ZdQUnC1wB2ylZjkPAG-Uq82eLk6iuzSg31FfV0shZ21cigxFAGeE60fgJsm8KReZYbUpQjbLQ6kFYNn4h3Ntd~nSvFxRVWagU6vNNiLEcRwDybaignEFxlQUVPABRme3cTjgmySBcvnV6wSr1bT3ErKCS4rMjf3vDVeJNjwfDs8LVNmu1tmmvh5sP6NN50xFAqQWoggIQz1AKpP57dXZHnvVUuscrdpWeIfLPW4DRXyHJ-WhsZyHlHvkTUC80EXItnMLK4AYqmYk3iexRph1iG36Tm-g7-ns0YmGLPm1vqkE4AQ__',
      category: ['Action', 'Comedy', 'Family'],
      description: "This is the comic synopsis which is clickable to open more details about it. Let's add some."
    }
  ];

  genresList: Genres[] = [
    {
      id: 1,
      image: 'https://s3-alpha-sig.figma.com/img/ee0b/cb99/96dfa3d1211cc6df63cb584d0d012709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExZecsu-p66aQZcAiDcIOxkztJuTL0K4k~GuFbqEfdkGeGOpzZxFszRkueharfFKqnxVv7KGLyuDXGnFw45iWvS81nhMLbFLwcktbqa-t30S7gttRkoNkNjLrDks6KjTwzyHuIeOw8bbEbV~I4mVDSHKnBjU5EHZG-wbYxE8W2vANJmEIa2-2rM8r72yBE9zc4tuP2WsKXkz-Qt7MreXfTBDtw4PrDDGdacSynnm6jGh0C52Hp9FrWaXnZo7YkacVS5I3wwLnUmabVH-dA-NpTr45IcT-g-SsJVwqCs1EyTaoXIk~XTPcxJMy8ZnXJnfWADefauNbvSaM1hj0PDHqg__',
      title: 'Romance'
    },
    {
      id: 2,
      image: 'https://s3-alpha-sig.figma.com/img/69cc/2dd0/d4526c4a67b80b525a10e1416a528406?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n67loMJUu4-N0keMzYnqObGi96ITp4m5SopEwsoZx3P-GlDk94s0TKG0pPG4cGxePOIFrY30d26RZnFOleowkIwl3bkZb1ZsJdkZDelYrqWqgzk~eY336DV8QJk-3AzNXPeYrU6Ft7VRDAIz6aEwYLxXFw4IerZcLvcg2QdhznyabwR7bOwCMJGZE2PoRWgFUFGwcyLy4yHFVD~V~mFzIOB6xMtU6i0wXSCrNdG50uIMJh7IVuJ8RbmaUJCkWIlTomhqPVxmw-RVHpErlbnfkeoC6~XO1mTOH4Reg~zIm-ApMBA5EzlBsr4D2OZ1cjx5qA1dsz36RMVupT2xAy-i2Q__',
      title: 'Fantasy'
    },
    {
      id: 3,
      image: 'https://s3-alpha-sig.figma.com/img/f500/170b/d1bb53bfce72948b4b49d41fe5e554e3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNrjttzrQkK2H-sZiSIk6qv1vI8NMiT8ebYPvewMtXkUpAEHHaOZ-DwyJjSJrdxjU2GDwvvKYmE2op-GKXuauWqXHL-wW5UBh0cOzqYjBhefpiC7WomkzA399DmN0lv3frpzZE6-pojJVCAf7ralagv2olmVJkRZnVREAabr-DE65XhIrW9gMNCl0HvKywiXw2JjIQ8h6~cvgQekDRhpQTLZ3T2igJFIvFiHENbLm-mg-YaU9RrEv4zD50YfmMAqpqX5Zv5fOz7jBbh1vboHdnrvAGBqmIInKKPY9~zudVfEEHjHXa8IK4gALmztvx4j8tGaGcjjG24naoJT7OAt0w__',
      title: 'Slice of Life'
    },
    {
      id: 4,
      image: 'https://s3-alpha-sig.figma.com/img/2ad0/e722/761c8b062aae03b79258470b81776cb4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTS6bKapUjTzILB5HmO-9ukNv7WOvSeK-mHRQa059lIWA~P1pxje0moho6IAZmsKECcd5ozxsR4qPkifm~ssSI3Y0RiCXKKaUKAdFSX8rcHrBmOwxe4l4xtNgXAjZR2ejuVn20lP7~4d1WkekiRogSIV9DrFQe-bliWBfGTLMRftFZr~tMiILoh10g6kW1TpVfVLme9W08fdKq81mJlHrFPktyXp7N5SXQYAFVEy9Xg3zs2M7JzoCTgDgqNhXCrMq0cWDALnmaxjaCwWP8-UIy9ikVd8NicYngKFUWYCUtyHGm7DB6dO8AGArGJxZlpZwm8fB~vSPkLhJfS58Uv8aw__',
      title: 'Action & Adventure'
    },
    {
      id: 5,
      image: 'https://s3-alpha-sig.figma.com/img/ac2e/4b22/aa1eb90074b1b518142d17e72d4e7abb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ugd5lVD9Cq83Gp1lTx5nJNSCLnlAbjjXCAXV~6iz82nUH5p9Tb7r9ANZXj0qzXV0zRwpNzgWd3cDqHMXsRll8InUSi98UViODsLhqJAE2p54J~OrBt1ZE-GH64u2rL1x~zUAVeE9QIJHh-GGOzn5snYqqp2e2ncDRMJtlphA2zuyAEUtG39I6Y~WvY8-p0aOrZ2rmrrQVayRVWJ-IAtRGHKClq5zak-AzcSXvauCCuJYLSBsa~Yb30ipovgAD1HFRVjZ~DFZTAawhxs8GqIKz~B0j8at2YTfQT8oYj89VM~A8diD1X~8c3NrR7iUz-gUTFAs1gybRINPjaNjnNgXZw__',
      title: 'Drama'
    },
    {
      id: 6,
      image: 'https://s3-alpha-sig.figma.com/img/5ffe/3406/07738807e448fe5b300ff7447639a3e4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y97OJ~C~8mY6xQU~kzlboMMQmO62gfM0ppD5BzS1gVl7i3jW7Y8pbfnWhF5G4FzGwWXQ1d8M83hCJ-ZN-UJJgWkGUjqKqZXW6xxeyuaO2zkRmmCjT-WQI3pwDoJy58kxHUK3w-lv8Fp20ImkJpdFq5z6lPPNkfDNAhtRGI~8T~vxPbDZFfGneyUrX0KH0JAR2Zf~0g~sWvziytGrQWOOKyMAALYGEfXGLzdwSUsP1MCD4byx93UWJK~5i8bjXGPqkQer9JBItgOR88DDmMe0w34o7cL9x5CyJFJLk3z8WSGXcDmjT483GR5eBmI19C543U-caiFQ6wOwB~gBctby5w__',
      title: 'Comedy'
    },
    {
      id: 7,
      image: 'https://s3-alpha-sig.figma.com/img/bc63/e020/51413eca6e9d0bfda858780278453639?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iu0vCqpwbqHlexxvi4cRG~XTqz5lg0~ACSNuLstcdXn8RSUcN2XWD~GBpTyi~kkV8nPk7f3aZic4pXptFC36OT1wZm3QbCgPYIDQBR4-DY99he0a8A5gVlhhG5nniZcRl18SgzvTNW3jNh1JAPUMBK9P5OiPu3fyGnfwIKFJnuthHWsVNK3uVPGZzmPmZc786H3~-JqFP3nrXXHe3jyRTH6-7gTfAc6yiiPfpMHHB6MzVANL1pYQUKQ83zD-rTtlBhzsuys-RxVQGBiaX7laRVVdnZKPSL2H-g~EXqbla3iRrvNI7SncpZtfQZL2QTiARzD0teYHmE2BU9ySqFhoaQ__',
      title: 'Horror'
    },
    {
      id: 8,
      image: 'https://s3-alpha-sig.figma.com/img/5c22/face/07a30c33cba93668f40a08cee7d38d7b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYz1MW9MLEDXuLOZEe2SOrxHFv6T7x5R3TOShJZsquky1tZJT4jG3m5W7LODW5Y7K5e2y1AI8HxjLVpNyKQpDTsgA-0fAlc0ysowQz7qMGnDHvPCpnpy1eQBg348F-I-BRZAbsMGWfKsTUt8~yulgMxubH2o-hJMbypVNCAxyXVY8c9igZnxQucPrnnUENXL5Lxr5c0rlb45EVzAGHMvwZBpaL6q05Sf7B43kPYFsCSKhYNoInhvsYCOCJ2lzeSz5YmJzUrHA~Ax-LYfqqLOPJxkUT3oujt4WkiDOW54oIxVKd7eSc5QzOHeFnINfAyojIaTwoPlO3Qwnd~7YR6qnQ__',
      title: 'Science Fiction'
    },
    {
      id: 9,
      image: 'https://s3-alpha-sig.figma.com/img/cd91/6006/0611527e89494e843b7da1ade587a786?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwH9o95jJIQyUxgCl5G-a~XTLnyoHGPTRMQyUcUQK9g92t1~QrfygTnUrss0Yx~KCi4H3IftyFO~61H0uMtOJvu9MdlvKCJyzgrQgVwEIPbH4X784FZ0OkfwP3Jy754vBqAtAiACvt-wRQiQr5TZgqDK2n9bRj1xou1xNqAA4NSZMhrJpYnt5NVm0w48rWMgIIEBSjiDiUJnNxaU3xWOlTTmfitM9WRXln3lcFN7WxglBMfO4AOjMUhi14LFHxaLJkdJm~I67urxHA4bpa73zHY4BswRuEgQbOxhsmxeccmjAadi9mdcZySfxalCoCkHBeVgYOfZdddQGBRaavoYXQ__',
      title: 'Supernatural'
    },
    {
      id: 10,
      image: 'https://s3-alpha-sig.figma.com/img/6e86/a40f/f05361a62f7c8e1e5f4cdee006ce96eb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZ-36h7C6WYzT2Z17G6sF-ndHUTM3-qlDfxPb~-dhw9kdZMEo1I8alc9EayFmLO4EAtWbjBfgtS4V3p4Cydm4bW4hUt5fYOSHMQICYhWNrZHAdDHjP3-QoGyqYmAE5-Yu-5pNwhRBTSoyvSJBDSWHsOx0164MTNLg3JqI29VdXizrCffLAeKp92ywNfaJQVo6ck1ooWnvO8PMN8P1iNP4W3DlNF0dN0TSJFqQ6rSz8kADi50fmevDCJ86EC0wuG3a-wE~X6xpDEV6tbxyCjUBKcQzKLAFC1FjGb7oqkumA0TD5BYj1r~hK0r0tPDBqkxZXNTN4-sEPVpWfTQXqlXaw__',
      title: 'Superhero'
    },
    {
      id: 11,
      image: 'https://s3-alpha-sig.figma.com/img/ef55/4ba6/df026dd2eeae429cb118ef5d70c1135e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXrAGpgr54nk-rqSw7GA9yx1B2dLriHt2eG0lGeD7TZLmGYMY3bL8lxsNFeInTX~i1FU0gS83KokTW8pumTfiYhe9cwg4yvrqr-fKB9vp~~MjGg7IiViKC4TFDjpCAB4ykOHZm4Zyk2FkbBvPEnzma-P2wuPDUSzrpIsADU51~AbrnWRcwIyBxb8a5LX-J8Rj3Dvjn~FKPnv1BOgvuyOiwaUj7ku8d8GePpJusGk~1HbDpvKMQ9pRK7TH9Gt5bkOo9eaSTfjlrCJDd9MwsOvUOql3mXDbIpntoIgg0Dn25zLqfdyQCI-lhTgTNpy75JW4oY5sp~kwINAT9nceaKrXQ__',
      title: 'Mystery'
    },
    {
      id: 12,
      image: 'https://s3-alpha-sig.figma.com/img/afb2/8bc9/5f16499d5f06ff8a6069ce0a72afcbd7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2fDMhIULToVW3xHMRSfM3Z0bpl373qq0fxOugPna92z3d3-FMQTLOcNjYWkIZ5Un2TYsx9923FPgGtHMAssnTAO4bHlUkFRMpHHJyI2pIMJp5T32RrP7kz5XSwsM2ztlUz2RqDkUU4V52sVqmDwspAYh4NvxX1znrvU3aRw35k1Efhp6~AH2MLGCdZPWpy3ULr1mjNC4IIMRIvuWs1chtoWxCe6aOGf9Bf3qig1grejHs~2qjE6x3ORgZq0sRGLyGVroP8VfDK28a2H1i~849cxFwfKjgbphXyBsffsuNPG7XRw2w6lre-67NA7LMoxzOriAAsCVd6w1WnOs2C06A__',
      title: 'Thriller'
    },
  ]
}
