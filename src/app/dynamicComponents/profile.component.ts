import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Welcome to Wonderland</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Jack found the Rose Necklace🎈!!</strong>
    </div>
  `
})
export class profileComponent implements AdComponent {
  @Input() data: any;
}