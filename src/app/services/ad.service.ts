import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from '../dynamicComponents/job-ad.component';
import { profileComponent } from '../dynamicComponents/profile.component';
// import { Type } from '@angular/core';
import { AdItem } from '../dynamicComponents/ad-item';


// class AdItem {
//   constructor(public component: Type<any>, public data: any) {}
// }

@Injectable()
export class adService {
  getAds() {
    return [
      new AdItem(profileComponent, {
        name: 'Fun Friday',
        bio: 'Friday became a cool, wet afternoon.',
      }),
      new AdItem(profileComponent, {
        name: 'Dr IQ',
        bio: 'Smart as they come',
      }),
      new AdItem(HeroJobAdComponent, {
        name: 'Hiring for several positions',
        body: 'We Open all days in a week.',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today',
      }),
    ];
  }
}
