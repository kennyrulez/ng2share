import { Component, OnInit, Input } from '@angular/core';
import { Platform, platforms } from '../platforms.utils';
import { Properties } from '../properties.utils';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'share-button',
    template: `
        <a href="{{ this.url }}" (click)="click($event)" target="_blank">
            <div
                (click)="click($event)"
                class="nxs-share-btn nxs-share-btn-{{ platform.name }} nxs-{{ direction }}-margin {{ textEnabled ? 'nxs-share-btn-with-text' : '' }}"
            >
                <i class="ic">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><svg:path fill="white" [attr.d]="platform.icon" /></svg>
                </i>
                <span class="nxs-shareText" *ngIf="textEnabled">
                    <span class="nxs-shareText-primary">{{ platform.text }} </span>
                    <span class="nxs-shareText-secondary">{{ addedText }}</span>
                </span>
            </div>
        </a>
    `,
    styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent implements OnInit {
    @Input() platformName: string;
    platform: Platform;
    @Input() textEnabled: boolean;
    @Input() addedText: string;
    @Input() direction = 'horizontal';
    @Input() properties: Properties;
    url: string;

    constructor() {}

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
            for (const key in this.platform.properties) {
                if (this.platform.properties.hasOwnProperty(key)) {
                    const val = this.properties[this.platform.properties[key]];
                    if (val) {
                        this.url += `&${key}=${val}`;
                    }
                }
            }
        }
    }
}
