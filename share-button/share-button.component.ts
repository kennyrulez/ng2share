import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Platform, platforms } from '../platforms.utils'
import { Properties } from '../properties.utils'

@Component({
  selector: 'share-button',
  template: `<a href="{{this.url}}" (click)="click($event)" target='_blank'>
              <div  (click)="click($event)"
                class="nxs-share-btn nxs-share-btn-{{platform.name}} nxs-{{direction}}-margin
                  {{textEnabled ? 'nxs-share-btn-with-text' : '' }}">
                <i class="ic"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><svg:path fill="white" [attr.d]="platform.icon" /></svg></i>
                <span class="nxs-shareText" *ngIf="textEnabled">
                  <span class="nxs-shareText-primary">{{platform.text}} </span>
                  <span class="nxs-shareText-secondary">{{addedText}}</span>
                </span>
              </div>
            </a>
            `,
  styleUrls: ['./share-button.css']
})
export class ShareButtonComponent implements OnInit {
  @Input() platformName;
  platform: Platform;
  @Input() textEnabled: boolean;
  @Input() addedText: string;
  @Input() direction: string = 'horizontal';
  @Input() properties: Properties;
  url: string;

  constructor() { }

  ngOnInit() {
    this.platform = platforms[this.platformName];
    this.constructUrl();
  }

  click(event) {
    window.open(this.url, 'newwindow', 'width=1070, height=600');
    event.preventDefault();
  }

  constructUrl() {
    this.url = this.platform.url + this.properties.url;
    if (this.platform.properties) {
      for (let key in this.platform.properties) {
        // if the property has been found.
        let val = this.properties[this.platform.properties[key]];
        if (val) {
          this.url += `&${key}=${val}`;
        }
      }
    }
  }
}
