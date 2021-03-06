import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AdDirective } from '../directives/ad.directive';
import { AdComponent } from './ad.component';

@Component({
  selector: 'ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template adDirective></ng-template>
    </div>
  `,
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adDirective!: AdDirective;
  interval: number | undefined;
  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    console.log(this.ads.length);
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }
  // freezeProfile(){
  //   clearInterval(this.interval)
  // }

  getAds() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
}
