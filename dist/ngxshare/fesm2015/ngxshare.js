import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxshareComponent {
    constructor() {
        // Platforms
        this.platforms = ['twitter', 'facebook', 'googlePlus', 'reddit', 'pinterest', 'linkedin'];
        // tells if the text must be enabled on primary platforms
        this.textEnabled = false;
        // This should be set up directly in the meta tags as this is good practice
        // Use this input only if you have multiple content to share per url.
        // So in case you need this the input should be like the following object (you can omitt some fields)
        // {title:'my title', description:'my desc',img:' an image', via:'Ced_VDB', hashtags:'someHashTag'}
        this.properties = {};
        // horizontal layout or vertical layout (_accessed via getter & setter)
        this._direction = 'horizontal';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fetchProperties();
    }
    /**
     * @return {?}
     */
    fetchProperties() {
        this.properties.url = this.properties.url || this.getMetaContent('og:url') || window.location.href.toString();
        this.properties.title = this.properties.title || this.getMetaContent('og:title') || document.title;
        this.properties.description = this.properties.description || this.getMetaContent('og:description');
        this.properties.image = this.properties.image || this.getMetaContent('og:image');
        this.properties.via = this.properties.via || this.getMetaContent('nxs:via');
        this.properties.hashtags = this.properties.hashtags || this.getMetaContent('nxs:hashtags');
        for (const p in this.properties) {
            if (this.properties.hasOwnProperty(p)) {
                this.properties[p] = encodeURIComponent(this.properties[p]);
            }
        }
    }
    /**
     * @param {?} property
     * @return {?}
     */
    getMetaContent(property) {
        /** @type {?} */
        const elem = document.querySelector(`meta[property='${property}']`);
        if (elem) {
            return elem.getAttribute('content');
        }
        return '';
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set direction(direction) {
        if (direction === 'vertical') {
            this._direction = direction;
        }
        else {
            this._direction = 'horizontal';
        }
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
}
NgxshareComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-container',
                template: `<div class="nxs-shareContainer nxs-{{direction}}">
  <!-- Primary share platforms-->
  <share-button *ngFor="let platform of platforms" [platformName]="platform" [textEnabled]="textEnabled" [addedText]="addedText" [direction]="direction"
    [properties]="properties">
  </share-button>
</div>`,
                styles: [`a{text-decoration:none}.nxs-shareContainer{display:inline-flex;overflow:hidden}.nxs-vertical{flex-direction:column}.nxs-share-btn{font-size:24px;cursor:pointer;color:#eee;border-radius:2px;height:32px;width:32px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn:hover{color:#fff}.nxs-share-btn-more{background:#ccc}`],
            },] },
];
NgxshareComponent.propDecorators = {
    platforms: [{ type: Input }],
    textEnabled: [{ type: Input }],
    addedText: [{ type: Input }],
    properties: [{ type: Input }],
    direction: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const platforms = {
    twitter: {
        name: 'twitter',
        url: 'https://twitter.com/intent/tweet?url=',
        icon: 'M20,1.9c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1C16.1,0.5,15,0,13.8,0c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,4.9,3.4,3.2,1.4,0.7C1,1.4,0.8,2.1,0.8,2.8c0,1.4,0.7,2.7,1.8,3.4C2,6.2,1.4,6,0.8,5.7v0.1c0,2,1.4,3.6,3.3,4C3.8,9.9,3.4,9.9,3,9.9c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8C13.8,16.2,18,10,18,4.6l0-0.5C18.8,3.5,19.5,2.7,20,1.9z',
        text: 'Tweet',
        properties: {
            text: 'title',
            via: 'via',
            hashtags: 'hashtags'
        }
    },
    googlePlus: {
        name: 'google-plus',
        url: 'https://plus.google.com/share?url=',
        icon: 'M7,7.7h3.1c-0.5,1.6-2,2.7-3.8,2.6c-2.1,0-3.9-1.7-3.9-3.8c-0.1-2.3,1.7-4.1,4-4.1c1,0,2,0.4,2.7,1c0.2,0.2,0.4,0.2,0.6,0l1.1-1.1c0.2-0.2,0.2-0.5,0-0.6C9.7,0.7,8.2,0,6.5,0C3-0.1,0,2.8,0,6.4c0,3.6,2.8,6.4,6.4,6.4	c3.4,0,6.2-2.7,6.4-6c0,0,0-1.5,0-1.5H7c-0.2,0-0.4,0.2-0.4,0.4v1.6C6.6,7.5,6.8,7.7,7,7.7z',
        text: 'Share',
    },
    facebook: {
        name: 'facebook',
        url: 'http://www.facebook.com/sharer/sharer.php?u=',
        icon: 'M6.7,20v-9.1h3.1l0.5-3.6H6.7V5.1c0-1,0.3-1.7,1.8-1.7l1.9,0V0.1C10.1,0.1,8.9,0,7.6,0C4.9,0,3.1,1.7,3.1,4.7v2.6H0v3.6h3.1V20H6.7z',
        text: 'Share',
    },
    reddit: {
        name: 'reddit',
        url: 'http://www.reddit.com/submit?url=',
        icon: 'M14.3,9.1c0.1,0.1,0.1,0.3,0.1,0.4c0,0.3-0.1,0.5-0.3,0.8c-0.2,0.2-0.4,0.4-0.6,0.5h0c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.4-0.4-0.5-0.7h0c0,0,0,0,0,0c0,0,0,0,0,0h0c0-0.1,0-0.2,0-0.2c0-0.3,0.1-0.5,0.2-0.7c0.1-0.2,0.4-0.4,0.6-0.5c0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.1,0.3-0.1,0.4-0.1c0.3,0,0.5,0.1,0.7,0.2C14,8.6,14.2,8.8,14.3,9.1C14.3,9.1,14.3,9.1,14.3,9.1C14.3,9.1,14.3,9.1,14.3,9.1L14.3,9.1L14.3,9.1z M13.5,12.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1l0,0c-0.9,0.5-1.9,0.8-3,0.8c-0.8,0-1.5-0.2-2.2-0.5l0,0l0,0c-0.1,0-0.2-0.1-0.4-0.2c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.2,0.1c0,0,0,0,0,0h0c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.2c1,0.7,2.2,1,3.3,1c1.1,0,2.1-0.2,3.1-0.7l0,0l0,0c0.1-0.1,0.3-0.1,0.4-0.2c0.1,0,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3v0c0,0,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.2C13.7,12.5,13.6,12.4,13.5,12.3z M6.5,10.7C6.5,10.7,6.5,10.7,6.5,10.7c0.1,0,0.3,0.1,0.4,0.1c0.3,0,0.6-0.1,0.9-0.3C8,10.2,8.2,9.9,8.2,9.5c0,0,0,0,0,0c0,0,0,0,0-0.1c0-0.3-0.2-0.7-0.4-0.9C7.5,8.4,7.2,8.2,6.9,8.2c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0c0,0,0,0,0,0C6.2,8.4,5.8,8.7,5.7,9.1l0,0v0c0,0,0,0,0,0c0,0.1-0.1,0.2-0.1,0.4c0,0.3,0.1,0.5,0.2,0.7C6,10.4,6.2,10.6,6.5,10.7C6.5,10.7,6.5,10.7,6.5,10.7z M20,7.5L20,7.5c0,0,0,0.1,0,0.1c0,0.5-0.2,1-0.4,1.3c-0.2,0.4-0.6,0.7-1,0.9c0,0.2,0,0.4,0,0.6c0,1-0.4,2.1-1,2.9v0h0c-1.2,1.5-2.9,2.5-4.7,2.9h0l0,0c-1,0.2-2,0.4-2.9,0.4c-1.5,0-2.9-0.3-4.3-0.8l0,0h0C4.2,15.3,2.9,14.3,2,13c-0.4-0.7-0.7-1.6-0.7-2.4c0-0.2,0-0.4,0-0.6C1,9.7,0.7,9.4,0.4,9.1C0.2,8.7,0,8.2,0,7.7v0v0v0C0,7.1,0.3,6.4,0.7,6c0.4-0.5,1.1-0.8,1.7-0.8c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0.3,0,0.7,0.1,1,0.2l0,0l0,0C4,5.5,4.2,5.6,4.5,5.8c0.1,0,0.2-0.1,0.3-0.1c1.4-0.9,3.1-1.2,4.8-1.3C9.5,3.6,9.6,2.8,10,2c0.3-0.6,0.9-1.1,1.6-1.3l0,0l0,0c0.3-0.1,0.5-0.1,0.8-0.1c0.7,0,1.4,0.2,2,0.4c0.3-0.4,0.7-0.8,1.2-0.9l0,0l0,0C15.8,0.1,16.1,0,16.4,0c0.3,0,0.6,0.1,0.9,0.2v0c0,0,0,0,0,0c0,0,0,0,0,0c0.4,0.2,0.8,0.5,1,0.8c0.3,0.4,0.4,0.8,0.4,1.3c0,0.1,0,0.2,0,0.3l0,0c0,0,0,0,0,0c0,0.6-0.4,1.1-0.8,1.5c-0.4,0.4-1,0.6-1.6,0.6c-0.1,0-0.2,0-0.3,0c-0.6,0-1.1-0.3-1.5-0.7C14.3,3.5,14,3,14,2.4c0,0,0-0.1,0-0.1c-0.5-0.2-1.1-0.4-1.7-0.4c-0.1,0-0.2,0-0.2,0h0c-0.4,0-0.8,0.3-1,0.7v0v0c-0.3,0.6-0.3,1.2-0.4,1.9c1.6,0.1,3.2,0.5,4.7,1.3h0l0,0c0,0,0.1,0,0.1,0.1c0.1-0.1,0.2-0.2,0.3-0.2c0.4-0.3,0.9-0.4,1.5-0.4c0.2,0,0.5,0,0.7,0.1h0l0,0c0,0,0,0,0,0v0c0.5,0.1,1,0.4,1.3,0.8C19.7,6.5,20,7,20,7.5L20,7.5L20,7.5L20,7.5z M15.3,2.3C15.3,2.3,15.3,2.3,15.3,2.3L15.3,2.3L15.3,2.3c0,0.4,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.7,0.3h0h0c0,0,0,0,0.1,0c0.3,0,0.5-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.4-0.7l0,0v0c0,0,0,0,0-0.1c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.2,0.1-0.4,0.2-0.6,0.4C15.3,1.8,15.3,2,15.3,2.3z M3.4,6.6C3.1,6.5,2.9,6.4,2.7,6.4c0,0-0.1,0-0.1,0h0l0,0c-0.3,0-0.6,0.1-0.9,0.4C1.5,7,1.3,7.3,1.3,7.6v0l0,0c0,0,0,0.1,0,0.1c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.2,0.3,0.3,0.4C2.1,7.8,2.7,7.2,3.4,6.6z M17.4,10.5c0-0.7-0.3-1.4-0.7-2c-0.8-1.2-2.1-1.9-3.5-2.4l0,0c-0.3-0.1-0.5-0.2-0.8-0.2c-0.8-0.2-1.6-0.3-2.4-0.3c-1.1,0-2.2,0.2-3.2,0.5C5.4,6.6,4.1,7.3,3.3,8.5v0c-0.4,0.6-0.7,1.3-0.7,2c0,0.3,0,0.5,0.1,0.8l0,0c0.2,0.6,0.5,1.1,0.8,1.6c0.4,0.5,0.9,0.8,1.4,1.2c0.1,0.1,0.2,0.1,0.3,0.2c1.4,0.8,3.1,1.2,4.8,1.2c0.3,0,0.6,0,0.8,0c1.7-0.1,3.3-0.6,4.7-1.6l0,0c0.4-0.3,0.8-0.7,1.1-1.1c0.3-0.4,0.5-0.9,0.7-1.5v0l0,0C17.4,10.9,17.4,10.7,17.4,10.5z M18.7,7.7c0-0.2,0-0.3-0.1-0.5l0,0l0,0c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.1-0.5-0.2-0.7-0.2c-0.2,0-0.5,0.1-0.7,0.2c0.7,0.6,1.2,1.3,1.6,2.1c0.1-0.1,0.2-0.2,0.3-0.4C18.7,8.1,18.7,7.9,18.7,7.7z',
        text: 'Submit',
        properties: {
            title: 'title'
        }
    },
    pinterest: {
        name: 'pinterest',
        url: 'https://pinterest.com/pin/create/button/?url=',
        icon: 'M13.7,2c-1.4-1.3-3.3-2-5.4-2C5.1,0,3.2,1.3,2.1,2.4C0.8,3.7,0,5.5,0,7.3c0,2.2,0.9,3.9,2.5,4.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.2,0.7-0.6c0.1-0.2,0.2-0.7,0.2-0.9c0.1-0.4,0-0.6-0.2-0.9C3,9,2.8,8.4,2.8,7.6c0-2.4,1.8-5,5.2-5c2.7,0,4.3,1.5,4.3,4c0,1.5-0.3,3-0.9,4c-0.4,0.7-1.2,1.6-2.3,1.6c-0.5,0-0.9-0.2-1.2-0.6c-0.3-0.3-0.3-0.8-0.2-1.2c0.1-0.5,0.3-1,0.4-1.5C8.4,7.9,8.7,7,8.7,6.3c0-1.2-0.7-2-1.8-2c-1.4,0-2.5,1.4-2.5,3.2c0,0.9,0.2,1.5,0.3,1.8c-0.2,0.7-1.2,5.2-1.4,6c-0.1,0.5-0.8,4.3,0.3,4.6c1.3,0.3,2.4-3.4,2.5-3.8c0.1-0.3,0.4-1.6,0.6-2.4c0.6,0.6,1.6,1,2.6,1c1.8,0,3.5-0.8,4.6-2.3c1.1-1.4,1.7-3.5,1.7-5.7C15.7,5,15,3.3,13.7,2z',
        text: 'Pin',
        properties: {
            description: 'title',
            media: 'image'
        }
    },
    linkedin: {
        name: 'linkedin',
        url: 'http://www.linkedin.com/shareArticle?mini=true&url=',
        icon: 'M20,11.7v7.4h-4.3v-6.9c0-1.7-0.6-2.9-2.2-2.9c-1.2,0-1.9,0.8-2.2,1.6c-0.1,0.3-0.1,0.7-0.1,1v7.2H6.9c0,0,0.1-11.7,0-12.9h4.3V8c0,0,0,0,0,0h0v0c0.6-0.9,1.6-2.1,3.9-2.1C17.9,5.9,20,7.8,20,11.7z M2.4,0C1,0,0,1,0,2.2c0,1.2,0.9,2.2,2.4,2.2h0c1.5,0,2.4-1,2.4-2.2C4.8,1,3.9,0,2.4,0z M0.3,19.1h4.3V6.2H0.3V19.1z',
        text: 'Share',
        properties: {
            title: 'title'
        }
    },
    stumbleUpon: {
        name: 'stumbleUpon',
        url: 'http://www.stumbleupon.com/submit?url=',
        icon: 'M20,14.4c0,1.9-1.5,3.4-3.4,3.4H16c-1.9,0-3.4-1.5-3.4-3.4v-4.3c0-0.7-0.5-1.2-1.2-1.2H6.8c-0.7,0-1.2,0.5-1.2,1.1c0,0.6,0.6,1.2,1.3,1.2l0.7,0c1.9,0.1,3.4,1.6,3.3,3.4c-0.1,1.7-1.6,3.2-3.5,3.2H0v-2.2h7.3c0.7,0,1.3-0.5,1.3-1c0-0.5-0.5-1-1.2-1.1l-0.7,0c-1.9-0.1-3.4-1.6-3.4-3.5c0-1.8,1.5-3.3,3.4-3.3h4.6c1.9,0,3.4,1.5,3.4,3.4v4.3c0,0.7,0.5,1.2,1.2,1.2h0.6c0.7,0,1.2-0.5,1.2-1.2V0h2c0.1,0,0.2,0,0.2,0V14.4z',
        text: 'stumbleupon',
        properties: {
            title: 'title'
        }
    },
    tumblr: {
        name: 'tumblr',
        url: 'http://www.tumblr.com/share/link?url=',
        icon: 'M10.5,15.9c0,0-0.6,0.7-1.7,0.7s-1.6-0.7-1.6-1.7c0-0.4,0-2.9,0-5.7h3.6V5.7H7.2c0-3.1,0-5.7,0-5.7H4.4C4,2.6,2.3,4.7,0,5.7v3.4h2.7c0,3.3,0,6.4,0,6.6c0,0.9,0.9,4.2,5.3,4.2c2.6,0,3.6-1.7,3.6-1.7L10.5,15.9z',
        text: 'Share',
        properties: {
            title: 'title',
            caption: 'description'
        }
    },
    mail: {
        name: 'mail',
        url: 'mailto:?subject=',
        icon: 'M18.4,0H1.6C0.7,0,0,0.7,0,1.6v11c0,0.9,0.7,1.6,1.6,1.6h16.8c0.9,0,1.6-0.7,1.6-1.6v-11C20,0.7,19.3,0,18.4,0z M18.4,0.6c0.2,0,0.3,0.1,0.5,0.1l-8.1,7.1c-0.4,0.4-1.1,0.4-1.5,0L1.1,0.7c0.1-0.1,0.3-0.1,0.5-0.1H18.4z M19.4,12.6c0,0.6-0.5,1-1,1H1.6c-0.6,0-1-0.5-1-1v-11c0-0.1,0-0.2,0.1-0.3L7.2,7l-3.6,3.4c-0.1,0.2-0.1,0.4,0,0.5C3.6,11,3.7,11,3.8,11C3.9,11,4,11,4,10.9l3.8-3.5l1,0.9C9.1,8.6,9.6,8.7,10,8.7s0.9-0.1,1.2-0.4l1.1-0.9c0,0,0,0,0,0l3.7,3.5c0,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.1c0.1-0.2,0.1-0.4,0-0.5l-3.7-3.5l6.5-5.7c0,0.1,0.1,0.2,0.1,0.4V12.6z',
        text: 'Mail',
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ShareButtonComponent {
    constructor() {
        this.direction = 'horizontal';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.platform = platforms[this.platformName];
        this.constructUrl();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        window.open(this.url, 'newwindow', 'width=1070, height=600');
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    constructUrl() {
        this.url = this.platform.url + this.properties.url;
        if (this.platform.properties) {
            for (const key in this.platform.properties) {
                if (this.platform.properties.hasOwnProperty(key)) {
                    /** @type {?} */
                    const val = this.properties[this.platform.properties[key]];
                    if (val) {
                        this.url += `&${key}=${val}`;
                    }
                }
            }
        }
    }
}
ShareButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-button',
                template: `<a href="{{this.url}}" (click)="click($event)" target='_blank'>
              <div (click)="click($event)"
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
                styles: [`a{text-decoration:none}.ic{display:flex;align-content:center;justify-content:center;align-items:center}.nxs-share-btn{height:32px;width:32px;font-weight:700;cursor:pointer;color:#eee;border-radius:5px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn-with-text{padding:.3em 1em;width:auto}.nxs-share-btn:hover{color:#fff}.nxs-shareText{margin-left:5px;display:flex;align-content:center}.nxs-share-btn-facebook{background:#2d609b}.nxs-share-btn-twitter{background:#00c3f3}.nxs-share-btn-google-plus{background:#eb4026}.nxs-share-btn-linkedin{background:#0074a1}.nxs-share-btn-stumbleUpon{background:#ff4e2e}.nxs-share-btn-tumblr{background:#35465c}.nxs-share-btn-pinterest{background:#ca212a;font-size:1.1rem}.nxs-share-btn-reddit{background:#ff5700;font-size:1.1rem}.nxs-share-btn-mail{background:#ff2e40}`]
            },] },
];
/** @nocollapse */
ShareButtonComponent.ctorParameters = () => [];
ShareButtonComponent.propDecorators = {
    platformName: [{ type: Input }],
    textEnabled: [{ type: Input }],
    addedText: [{ type: Input }],
    direction: [{ type: Input }],
    properties: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxshareModule {
}
NgxshareModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule
                ],
                declarations: [
                    NgxshareComponent,
                    ShareButtonComponent
                ],
                exports: [
                    NgxshareComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxshareComponent, NgxshareModule, ShareButtonComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4c2hhcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neHNoYXJlL2xpYi9uZ3hzaGFyZS5jb21wb25lbnQudHMiLCJuZzovL25neHNoYXJlL2xpYi9wbGF0Zm9ybXMudXRpbHMudHMiLCJuZzovL25neHNoYXJlL2xpYi9zaGFyZS1idXR0b24vc2hhcmUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4c2hhcmUvbGliL25neHNoYXJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tICcuL3Byb3BlcnRpZXMudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZS1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJueHMtc2hhcmVDb250YWluZXIgbnhzLXt7ZGlyZWN0aW9ufX1cIj5cbiAgPCEtLSBQcmltYXJ5IHNoYXJlIHBsYXRmb3Jtcy0tPlxuICA8c2hhcmUtYnV0dG9uICpuZ0Zvcj1cImxldCBwbGF0Zm9ybSBvZiBwbGF0Zm9ybXNcIiBbcGxhdGZvcm1OYW1lXT1cInBsYXRmb3JtXCIgW3RleHRFbmFibGVkXT1cInRleHRFbmFibGVkXCIgW2FkZGVkVGV4dF09XCJhZGRlZFRleHRcIiBbZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiXG4gICAgW3Byb3BlcnRpZXNdPVwicHJvcGVydGllc1wiPlxuICA8L3NoYXJlLWJ1dHRvbj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2Bhe3RleHQtZGVjb3JhdGlvbjpub25lfS5ueHMtc2hhcmVDb250YWluZXJ7ZGlzcGxheTppbmxpbmUtZmxleDtvdmVyZmxvdzpoaWRkZW59Lm54cy12ZXJ0aWNhbHtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm54cy1zaGFyZS1idG57Zm9udC1zaXplOjI0cHg7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6I2VlZTtib3JkZXItcmFkaXVzOjJweDtoZWlnaHQ6MzJweDt3aWR0aDozMnB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsta2h0bWwtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmV9Lm54cy1ob3Jpem9udGFsLW1hcmdpbnttYXJnaW46MCA1cHh9Lm54cy12ZXJ0aWNhbC1tYXJnaW57bWFyZ2luOjVweCAwfS5ueHMtc2hhcmUtYnRuOmhvdmVye2NvbG9yOiNmZmZ9Lm54cy1zaGFyZS1idG4tbW9yZXtiYWNrZ3JvdW5kOiNjY2N9YF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neHNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gUGxhdGZvcm1zXG4gIEBJbnB1dCgpIHBsYXRmb3JtcyA9IFsndHdpdHRlcicsICdmYWNlYm9vaycsICdnb29nbGVQbHVzJywgJ3JlZGRpdCcsICdwaW50ZXJlc3QnLCAnbGlua2VkaW4nXTtcbiAgLy8gdGVsbHMgaWYgdGhlIHRleHQgbXVzdCBiZSBlbmFibGVkIG9uIHByaW1hcnkgcGxhdGZvcm1zXG4gIEBJbnB1dCgpIHRleHRFbmFibGVkID0gZmFsc2U7XG4gIC8vIFRleHQgYWRkZWQgdG8gdGhlIHZhbmlsbGEgbWVzc2FnZSwgZXg6ICd5b3VyIGNyZWF0aW9uJyB3aWxsIHJlc3VsdCBpblxuICAvLyAnVHdlZXQgeW91ciBjcmVhdGlvbicgZm9yIHR3aXR0ZXIgb3IgJ1NoYXJlIHlvdXIgY3JlYXRpb24nIGZvciBmYlxuICBASW5wdXQoKSBhZGRlZFRleHQ6IHN0cmluZztcbiAgLy8gVGhpcyBzaG91bGQgYmUgc2V0IHVwIGRpcmVjdGx5IGluIHRoZSBtZXRhIHRhZ3MgYXMgdGhpcyBpcyBnb29kIHByYWN0aWNlXG4gIC8vIFVzZSB0aGlzIGlucHV0IG9ubHkgaWYgeW91IGhhdmUgbXVsdGlwbGUgY29udGVudCB0byBzaGFyZSBwZXIgdXJsLlxuICAvLyBTbyBpbiBjYXNlIHlvdSBuZWVkIHRoaXMgdGhlIGlucHV0IHNob3VsZCBiZSBsaWtlIHRoZSBmb2xsb3dpbmcgb2JqZWN0ICh5b3UgY2FuIG9taXR0IHNvbWUgZmllbGRzKVxuICAvLyB7dGl0bGU6J215IHRpdGxlJywgZGVzY3JpcHRpb246J215IGRlc2MnLGltZzonIGFuIGltYWdlJywgdmlhOidDZWRfVkRCJywgaGFzaHRhZ3M6J3NvbWVIYXNoVGFnJ31cbiAgQElucHV0KCkgcHJvcGVydGllczogUHJvcGVydGllcyA9IHt9O1xuICAvLyBob3Jpem9udGFsIGxheW91dCBvciB2ZXJ0aWNhbCBsYXlvdXQgKF9hY2Nlc3NlZCB2aWEgZ2V0dGVyICYgc2V0dGVyKVxuICBfZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmV0Y2hQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBmZXRjaFByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLnVybCA9IHRoaXMucHJvcGVydGllcy51cmwgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6dXJsJykgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYudG9TdHJpbmcoKTtcbiAgICB0aGlzLnByb3BlcnRpZXMudGl0bGUgPSB0aGlzLnByb3BlcnRpZXMudGl0bGUgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6dGl0bGUnKSB8fCBkb2N1bWVudC50aXRsZTtcbiAgICB0aGlzLnByb3BlcnRpZXMuZGVzY3JpcHRpb24gPSB0aGlzLnByb3BlcnRpZXMuZGVzY3JpcHRpb24gfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6ZGVzY3JpcHRpb24nKTtcbiAgICB0aGlzLnByb3BlcnRpZXMuaW1hZ2UgPSB0aGlzLnByb3BlcnRpZXMuaW1hZ2UgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6aW1hZ2UnKTtcbiAgICB0aGlzLnByb3BlcnRpZXMudmlhID0gdGhpcy5wcm9wZXJ0aWVzLnZpYSB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdueHM6dmlhJyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmhhc2h0YWdzID0gdGhpcy5wcm9wZXJ0aWVzLmhhc2h0YWdzIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ254czpoYXNodGFncycpO1xuICAgIGZvciAoY29uc3QgcCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucHJvcGVydGllc1twXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0TWV0YUNvbnRlbnQocHJvcGVydHk6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBtZXRhW3Byb3BlcnR5PScke3Byb3BlcnR5fSddYCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBzYWZlIGNoZWNrIHRvIHByZXZlbnQgbWlzc3VzZXNcbiAgQElucHV0KClcbiAgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gIH1cblxuICBnZXQgZGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUGxhdGZvcm0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHByb3BlcnRpZXM/OiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtcyB7IC8vIHBsdXJhbFxuICAgIHR3aXR0ZXI6IFBsYXRmb3JtO1xuICAgIGZhY2Vib29rOiBQbGF0Zm9ybTtcbiAgICBnb29nbGVQbHVzOiBQbGF0Zm9ybTtcbiAgICBwaW50ZXJlc3Q6IFBsYXRmb3JtO1xuICAgIHJlZGRpdDogUGxhdGZvcm07XG4gICAgbGlua2VkaW46IFBsYXRmb3JtO1xuICAgIHN0dW1ibGVVcG9uOiBQbGF0Zm9ybTtcbiAgICB0dW1ibHI6IFBsYXRmb3JtO1xuICAgIG1haWw6IFBsYXRmb3JtO1xufVxuXG5leHBvcnQgY29uc3QgcGxhdGZvcm1zOiBQbGF0Zm9ybXMgPSB7XG4gICAgdHdpdHRlcjoge1xuICAgICAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0nLFxuICAgICAgICBpY29uOiAnTTIwLDEuOWMtMC43LDAuMy0xLjUsMC41LTIuNCwwLjZjMC44LTAuNSwxLjUtMS4zLDEuOC0yLjNjLTAuOCwwLjUtMS43LDAuOC0yLjYsMUMxNi4xLDAuNSwxNSwwLDEzLjgsMGMtMi4zLDAtNC4xLDEuOC00LjEsNC4xYzAsMC4zLDAsMC42LDAuMSwwLjlDNi40LDQuOSwzLjQsMy4yLDEuNCwwLjdDMSwxLjQsMC44LDIuMSwwLjgsMi44YzAsMS40LDAuNywyLjcsMS44LDMuNEMyLDYuMiwxLjQsNiwwLjgsNS43djAuMWMwLDIsMS40LDMuNiwzLjMsNEMzLjgsOS45LDMuNCw5LjksMyw5LjljLTAuMywwLTAuNSwwLTAuOC0wLjFjMC41LDEuNiwyLDIuOCwzLjgsMi44Yy0xLjQsMS4xLTMuMiwxLjgtNS4xLDEuOGMtMC4zLDAtMC43LDAtMS0wLjFjMS44LDEuMiw0LDEuOCw2LjMsMS44QzEzLjgsMTYuMiwxOCwxMCwxOCw0LjZsMC0wLjVDMTguOCwzLjUsMTkuNSwyLjcsMjAsMS45eicsXG4gICAgICAgIHRleHQ6ICdUd2VldCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRleHQ6ICd0aXRsZScsXG4gICAgICAgICAgICB2aWE6ICd2aWEnLFxuICAgICAgICAgICAgaGFzaHRhZ3M6ICdoYXNodGFncydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ29vZ2xlUGx1czoge1xuICAgICAgICBuYW1lOiAnZ29vZ2xlLXBsdXMnLFxuICAgICAgICB1cmw6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9JyxcbiAgICAgICAgaWNvbjogJ003LDcuN2gzLjFjLTAuNSwxLjYtMiwyLjctMy44LDIuNmMtMi4xLDAtMy45LTEuNy0zLjktMy44Yy0wLjEtMi4zLDEuNy00LjEsNC00LjFjMSwwLDIsMC40LDIuNywxYzAuMiwwLjIsMC40LDAuMiwwLjYsMGwxLjEtMS4xYzAuMi0wLjIsMC4yLTAuNSwwLTAuNkM5LjcsMC43LDguMiwwLDYuNSwwQzMtMC4xLDAsMi44LDAsNi40YzAsMy42LDIuOCw2LjQsNi40LDYuNFx0YzMuNCwwLDYuMi0yLjcsNi40LTZjMCwwLDAtMS41LDAtMS41SDdjLTAuMiwwLTAuNCwwLjItMC40LDAuNHYxLjZDNi42LDcuNSw2LjgsNy43LDcsNy43eicsXG4gICAgICAgIHRleHQ6ICdTaGFyZScsXG4gICAgfSxcbiAgICBmYWNlYm9vazoge1xuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxuICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PScsXG4gICAgICAgIGljb246ICdNNi43LDIwdi05LjFoMy4xbDAuNS0zLjZINi43VjUuMWMwLTEsMC4zLTEuNywxLjgtMS43bDEuOSwwVjAuMUMxMC4xLDAuMSw4LjksMCw3LjYsMEM0LjksMCwzLjEsMS43LDMuMSw0Ljd2Mi42SDB2My42aDMuMVYyMEg2Ljd6JyxcbiAgICAgICAgdGV4dDogJ1NoYXJlJyxcbiAgICB9LFxuICAgIHJlZGRpdDoge1xuICAgICAgICBuYW1lOiAncmVkZGl0JyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD91cmw9JyxcbiAgICAgICAgaWNvbjogJ00xNC4zLDkuMWMwLjEsMC4xLDAuMSwwLjMsMC4xLDAuNGMwLDAuMy0wLjEsMC41LTAuMywwLjhjLTAuMiwwLjItMC40LDAuNC0wLjYsMC41aDBjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDBjLTAuMSwwLTAuMiwwLjEtMC40LDAuMWMtMC4zLDAtMC42LTAuMS0wLjgtMC4zYy0wLjItMC4yLTAuNC0wLjQtMC41LTAuN2gwYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwaDBjMC0wLjEsMC0wLjIsMC0wLjJjMC0wLjMsMC4xLTAuNSwwLjItMC43YzAuMS0wLjIsMC40LTAuNCwwLjYtMC41YzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwYzAuMS0wLjEsMC4zLTAuMSwwLjQtMC4xYzAuMywwLDAuNSwwLjEsMC43LDAuMkMxNCw4LjYsMTQuMiw4LjgsMTQuMyw5LjFDMTQuMyw5LjEsMTQuMyw5LjEsMTQuMyw5LjFDMTQuMyw5LjEsMTQuMyw5LjEsMTQuMyw5LjFMMTQuMyw5LjFMMTQuMyw5LjF6IE0xMy41LDEyLjNjLTAuMS0wLjEtMC4yLTAuMS0wLjMtMC4xYy0wLjEsMC0wLjIsMC0wLjMsMC4xbDAsMGMtMC45LDAuNS0xLjksMC44LTMsMC44Yy0wLjgsMC0xLjUtMC4yLTIuMi0wLjVsMCwwbDAsMGMtMC4xLDAtMC4yLTAuMS0wLjQtMC4yYy0wLjEsMC0wLjEtMC4xLTAuMi0wLjFjLTAuMSwwLTAuMi0wLjEtMC4zLTAuMWMtMC4xLDAtMC4yLDAtMC4yLDAuMWMwLDAsMCwwLDAsMGgwYy0wLjEsMC0wLjIsMC4xLTAuMywwLjJjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjEsMC4yLDAuMiwwLjJjMSwwLjcsMi4yLDEsMy4zLDFjMS4xLDAsMi4xLTAuMiwzLjEtMC43bDAsMGwwLDBjMC4xLTAuMSwwLjMtMC4xLDAuNC0wLjJjMC4xLDAsMC4yLTAuMSwwLjItMC4yYzAuMS0wLjEsMC4xLTAuMiwwLjEtMC4zdjBjMCwwLDAtMC4xLDAtMC4xYzAtMC4xLDAtMC4yLTAuMS0wLjJDMTMuNywxMi41LDEzLjYsMTIuNCwxMy41LDEyLjN6IE02LjUsMTAuN0M2LjUsMTAuNyw2LjUsMTAuNyw2LjUsMTAuN2MwLjEsMCwwLjMsMC4xLDAuNCwwLjFjMC4zLDAsMC42LTAuMSwwLjktMC4zQzgsMTAuMiw4LjIsOS45LDguMiw5LjVjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLTAuMWMwLTAuMy0wLjItMC43LTAuNC0wLjlDNy41LDguNCw3LjIsOC4yLDYuOSw4LjJjLTAuMSwwLTAuMiwwLTAuMywwYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwQzYuMiw4LjQsNS44LDguNyw1LjcsOS4xbDAsMHYwYzAsMCwwLDAsMCwwYzAsMC4xLTAuMSwwLjItMC4xLDAuNGMwLDAuMywwLjEsMC41LDAuMiwwLjdDNiwxMC40LDYuMiwxMC42LDYuNSwxMC43QzYuNSwxMC43LDYuNSwxMC43LDYuNSwxMC43eiBNMjAsNy41TDIwLDcuNWMwLDAsMCwwLjEsMCwwLjFjMCwwLjUtMC4yLDEtMC40LDEuM2MtMC4yLDAuNC0wLjYsMC43LTEsMC45YzAsMC4yLDAsMC40LDAsMC42YzAsMS0wLjQsMi4xLTEsMi45djBoMGMtMS4yLDEuNS0yLjksMi41LTQuNywyLjloMGwwLDBjLTEsMC4yLTIsMC40LTIuOSwwLjRjLTEuNSwwLTIuOS0wLjMtNC4zLTAuOGwwLDBoMEM0LjIsMTUuMywyLjksMTQuMywyLDEzYy0wLjQtMC43LTAuNy0xLjYtMC43LTIuNGMwLTAuMiwwLTAuNCwwLTAuNkMxLDkuNywwLjcsOS40LDAuNCw5LjFDMC4yLDguNywwLDguMiwwLDcuN3YwdjB2MEMwLDcuMSwwLjMsNi40LDAuNyw2YzAuNC0wLjUsMS4xLTAuOCwxLjctMC44YzAsMCwwLDAsMCwwYzAuMSwwLDAuMSwwLDAuMiwwYzAuMywwLDAuNywwLjEsMSwwLjJsMCwwbDAsMEM0LDUuNSw0LjIsNS42LDQuNSw1LjhjMC4xLDAsMC4yLTAuMSwwLjMtMC4xYzEuNC0wLjksMy4xLTEuMiw0LjgtMS4zQzkuNSwzLjYsOS42LDIuOCwxMCwyYzAuMy0wLjYsMC45LTEuMSwxLjYtMS4zbDAsMGwwLDBjMC4zLTAuMSwwLjUtMC4xLDAuOC0wLjFjMC43LDAsMS40LDAuMiwyLDAuNGMwLjMtMC40LDAuNy0wLjgsMS4yLTAuOWwwLDBsMCwwQzE1LjgsMC4xLDE2LjEsMCwxNi40LDBjMC4zLDAsMC42LDAuMSwwLjksMC4ydjBjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDBjMC40LDAuMiwwLjgsMC41LDEsMC44YzAuMywwLjQsMC40LDAuOCwwLjQsMS4zYzAsMC4xLDAsMC4yLDAsMC4zbDAsMGMwLDAsMCwwLDAsMGMwLDAuNi0wLjQsMS4xLTAuOCwxLjVjLTAuNCwwLjQtMSwwLjYtMS42LDAuNmMtMC4xLDAtMC4yLDAtMC4zLDBjLTAuNiwwLTEuMS0wLjMtMS41LTAuN0MxNC4zLDMuNSwxNCwzLDE0LDIuNGMwLDAsMC0wLjEsMC0wLjFjLTAuNS0wLjItMS4xLTAuNC0xLjctMC40Yy0wLjEsMC0wLjIsMC0wLjIsMGgwYy0wLjQsMC0wLjgsMC4zLTEsMC43djB2MGMtMC4zLDAuNi0wLjMsMS4yLTAuNCwxLjljMS42LDAuMSwzLjIsMC41LDQuNywxLjNoMGwwLDBjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLTAuMSwwLjItMC4yLDAuMy0wLjJjMC40LTAuMywwLjktMC40LDEuNS0wLjRjMC4yLDAsMC41LDAsMC43LDAuMWgwbDAsMGMwLDAsMCwwLDAsMHYwYzAuNSwwLjEsMSwwLjQsMS4zLDAuOEMxOS43LDYuNSwyMCw3LDIwLDcuNUwyMCw3LjVMMjAsNy41TDIwLDcuNXogTTE1LjMsMi4zQzE1LjMsMi4zLDE1LjMsMi4zLDE1LjMsMi4zTDE1LjMsMi4zTDE1LjMsMi4zYzAsMC40LDAuMSwwLjYsMC4zLDAuOGMwLjIsMC4yLDAuNSwwLjMsMC43LDAuM2gwaDBjMCwwLDAsMCwwLjEsMGMwLjMsMCwwLjUtMC4xLDAuOC0wLjNjMC4yLTAuMiwwLjMtMC41LDAuNC0wLjdsMCwwdjBjMCwwLDAsMCwwLTAuMWMwLTAuMy0wLjEtMC42LTAuMy0wLjhjLTAuMi0wLjItMC41LTAuMy0wLjgtMC4zYy0wLjEsMC0wLjIsMC0wLjMsMGwwLDBsMCwwYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuNEMxNS4zLDEuOCwxNS4zLDIsMTUuMywyLjN6IE0zLjQsNi42QzMuMSw2LjUsMi45LDYuNCwyLjcsNi40YzAsMC0wLjEsMC0wLjEsMGgwbDAsMGMtMC4zLDAtMC42LDAuMS0wLjksMC40QzEuNSw3LDEuMyw3LjMsMS4zLDcuNnYwbDAsMGMwLDAsMCwwLjEsMCwwLjFjMCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjEsMC4yLDAuMywwLjMsMC40QzIuMSw3LjgsMi43LDcuMiwzLjQsNi42eiBNMTcuNCwxMC41YzAtMC43LTAuMy0xLjQtMC43LTJjLTAuOC0xLjItMi4xLTEuOS0zLjUtMi40bDAsMGMtMC4zLTAuMS0wLjUtMC4yLTAuOC0wLjJjLTAuOC0wLjItMS42LTAuMy0yLjQtMC4zYy0xLjEsMC0yLjIsMC4yLTMuMiwwLjVDNS40LDYuNiw0LjEsNy4zLDMuMyw4LjV2MGMtMC40LDAuNi0wLjcsMS4zLTAuNywyYzAsMC4zLDAsMC41LDAuMSwwLjhsMCwwYzAuMiwwLjYsMC41LDEuMSwwLjgsMS42YzAuNCwwLjUsMC45LDAuOCwxLjQsMS4yYzAuMSwwLjEsMC4yLDAuMSwwLjMsMC4yYzEuNCwwLjgsMy4xLDEuMiw0LjgsMS4yYzAuMywwLDAuNiwwLDAuOCwwYzEuNy0wLjEsMy4zLTAuNiw0LjctMS42bDAsMGMwLjQtMC4zLDAuOC0wLjcsMS4xLTEuMWMwLjMtMC40LDAuNS0wLjksMC43LTEuNXYwbDAsMEMxNy40LDEwLjksMTcuNCwxMC43LDE3LjQsMTAuNXogTTE4LjcsNy43YzAtMC4yLDAtMC4zLTAuMS0wLjVsMCwwbDAsMGMtMC4xLTAuMi0wLjMtMC40LTAuNS0wLjVjLTAuMi0wLjEtMC41LTAuMi0wLjctMC4yYy0wLjIsMC0wLjUsMC4xLTAuNywwLjJjMC43LDAuNiwxLjIsMS4zLDEuNiwyLjFjMC4xLTAuMSwwLjItMC4yLDAuMy0wLjRDMTguNyw4LjEsMTguNyw3LjksMTguNyw3Ljd6JyxcbiAgICAgICAgdGV4dDogJ1N1Ym1pdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBpbnRlcmVzdDoge1xuICAgICAgICBuYW1lOiAncGludGVyZXN0JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz91cmw9JyxcbiAgICAgICAgaWNvbjogJ00xMy43LDJjLTEuNC0xLjMtMy4zLTItNS40LTJDNS4xLDAsMy4yLDEuMywyLjEsMi40QzAuOCwzLjcsMCw1LjUsMCw3LjNjMCwyLjIsMC45LDMuOSwyLjUsNC42YzAuMSwwLDAuMiwwLjEsMC4zLDAuMWMwLjMsMCwwLjYtMC4yLDAuNy0wLjZjMC4xLTAuMiwwLjItMC43LDAuMi0wLjljMC4xLTAuNCwwLTAuNi0wLjItMC45QzMsOSwyLjgsOC40LDIuOCw3LjZjMC0yLjQsMS44LTUsNS4yLTVjMi43LDAsNC4zLDEuNSw0LjMsNGMwLDEuNS0wLjMsMy0wLjksNGMtMC40LDAuNy0xLjIsMS42LTIuMywxLjZjLTAuNSwwLTAuOS0wLjItMS4yLTAuNmMtMC4zLTAuMy0wLjMtMC44LTAuMi0xLjJjMC4xLTAuNSwwLjMtMSwwLjQtMS41QzguNCw3LjksOC43LDcsOC43LDYuM2MwLTEuMi0wLjctMi0xLjgtMmMtMS40LDAtMi41LDEuNC0yLjUsMy4yYzAsMC45LDAuMiwxLjUsMC4zLDEuOGMtMC4yLDAuNy0xLjIsNS4yLTEuNCw2Yy0wLjEsMC41LTAuOCw0LjMsMC4zLDQuNmMxLjMsMC4zLDIuNC0zLjQsMi41LTMuOGMwLjEtMC4zLDAuNC0xLjYsMC42LTIuNGMwLjYsMC42LDEuNiwxLDIuNiwxYzEuOCwwLDMuNS0wLjgsNC42LTIuM2MxLjEtMS40LDEuNy0zLjUsMS43LTUuN0MxNS43LDUsMTUsMy4zLDEzLjcsMnonLFxuICAgICAgICB0ZXh0OiAnUGluJyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aXRsZScsXG4gICAgICAgICAgICBtZWRpYTogJ2ltYWdlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsaW5rZWRpbjoge1xuICAgICAgICBuYW1lOiAnbGlua2VkaW4nLFxuICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD0nLFxuICAgICAgICBpY29uOiAnTTIwLDExLjd2Ny40aC00LjN2LTYuOWMwLTEuNy0wLjYtMi45LTIuMi0yLjljLTEuMiwwLTEuOSwwLjgtMi4yLDEuNmMtMC4xLDAuMy0wLjEsMC43LTAuMSwxdjcuMkg2LjljMCwwLDAuMS0xMS43LDAtMTIuOWg0LjNWOGMwLDAsMCwwLDAsMGgwdjBjMC42LTAuOSwxLjYtMi4xLDMuOS0yLjFDMTcuOSw1LjksMjAsNy44LDIwLDExLjd6IE0yLjQsMEMxLDAsMCwxLDAsMi4yYzAsMS4yLDAuOSwyLjIsMi40LDIuMmgwYzEuNSwwLDIuNC0xLDIuNC0yLjJDNC44LDEsMy45LDAsMi40LDB6IE0wLjMsMTkuMWg0LjNWNi4ySDAuM1YxOS4xeicsXG4gICAgICAgIHRleHQ6ICdTaGFyZScsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0dW1ibGVVcG9uOiB7XG4gICAgICAgIG5hbWU6ICdzdHVtYmxlVXBvbicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9JyxcbiAgICAgICAgaWNvbjogJ00yMCwxNC40YzAsMS45LTEuNSwzLjQtMy40LDMuNEgxNmMtMS45LDAtMy40LTEuNS0zLjQtMy40di00LjNjMC0wLjctMC41LTEuMi0xLjItMS4ySDYuOGMtMC43LDAtMS4yLDAuNS0xLjIsMS4xYzAsMC42LDAuNiwxLjIsMS4zLDEuMmwwLjcsMGMxLjksMC4xLDMuNCwxLjYsMy4zLDMuNGMtMC4xLDEuNy0xLjYsMy4yLTMuNSwzLjJIMHYtMi4yaDcuM2MwLjcsMCwxLjMtMC41LDEuMy0xYzAtMC41LTAuNS0xLTEuMi0xLjFsLTAuNywwYy0xLjktMC4xLTMuNC0xLjYtMy40LTMuNWMwLTEuOCwxLjUtMy4zLDMuNC0zLjNoNC42YzEuOSwwLDMuNCwxLjUsMy40LDMuNHY0LjNjMCwwLjcsMC41LDEuMiwxLjIsMS4yaDAuNmMwLjcsMCwxLjItMC41LDEuMi0xLjJWMGgyYzAuMSwwLDAuMiwwLDAuMiwwVjE0LjR6JyxcbiAgICAgICAgdGV4dDogJ3N0dW1ibGV1cG9uJyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgdGl0bGU6ICd0aXRsZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdHVtYmxyOiB7XG4gICAgICAgIG5hbWU6ICd0dW1ibHInLFxuICAgICAgICB1cmw6ICdodHRwOi8vd3d3LnR1bWJsci5jb20vc2hhcmUvbGluaz91cmw9JyxcbiAgICAgICAgaWNvbjogJ00xMC41LDE1LjljMCwwLTAuNiwwLjctMS43LDAuN3MtMS42LTAuNy0xLjYtMS43YzAtMC40LDAtMi45LDAtNS43aDMuNlY1LjdINy4yYzAtMy4xLDAtNS43LDAtNS43SDQuNEM0LDIuNiwyLjMsNC43LDAsNS43djMuNGgyLjdjMCwzLjMsMCw2LjQsMCw2LjZjMCwwLjksMC45LDQuMiw1LjMsNC4yYzIuNiwwLDMuNi0xLjcsMy42LTEuN0wxMC41LDE1Ljl6JyxcbiAgICAgICAgdGV4dDogJ1NoYXJlJyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgdGl0bGU6ICd0aXRsZScsXG4gICAgICAgICAgICBjYXB0aW9uOiAnZGVzY3JpcHRpb24nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1haWw6IHtcbiAgICAgICAgbmFtZTogJ21haWwnLFxuICAgICAgICB1cmw6ICdtYWlsdG86P3N1YmplY3Q9JyxcbiAgICAgICAgaWNvbjogJ00xOC40LDBIMS42QzAuNywwLDAsMC43LDAsMS42djExYzAsMC45LDAuNywxLjYsMS42LDEuNmgxNi44YzAuOSwwLDEuNi0wLjcsMS42LTEuNnYtMTFDMjAsMC43LDE5LjMsMCwxOC40LDB6IE0xOC40LDAuNmMwLjIsMCwwLjMsMC4xLDAuNSwwLjFsLTguMSw3LjFjLTAuNCwwLjQtMS4xLDAuNC0xLjUsMEwxLjEsMC43YzAuMS0wLjEsMC4zLTAuMSwwLjUtMC4xSDE4LjR6IE0xOS40LDEyLjZjMCwwLjYtMC41LDEtMSwxSDEuNmMtMC42LDAtMS0wLjUtMS0xdi0xMWMwLTAuMSwwLTAuMiwwLjEtMC4zTDcuMiw3bC0zLjYsMy40Yy0wLjEsMC4yLTAuMSwwLjQsMCwwLjVDMy42LDExLDMuNywxMSwzLjgsMTFDMy45LDExLDQsMTEsNCwxMC45bDMuOC0zLjVsMSwwLjlDOS4xLDguNiw5LjYsOC43LDEwLDguN3MwLjktMC4xLDEuMi0wLjRsMS4xLTAuOWMwLDAsMCwwLDAsMGwzLjcsMy41YzAsMC4xLDAuMSwwLjEsMC4yLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjFjMC4xLTAuMiwwLjEtMC40LDAtMC41bC0zLjctMy41bDYuNS01LjdjMCwwLjEsMC4xLDAuMiwwLjEsMC40VjEyLjZ6JyxcbiAgICAgICAgdGV4dDogJ01haWwnLFxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBwbGF0Zm9ybXMgfSBmcm9tICcuLi9wbGF0Zm9ybXMudXRpbHMnO1xuaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gJy4uL3Byb3BlcnRpZXMudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxhIGhyZWY9XCJ7e3RoaXMudXJsfX1cIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJueHMtc2hhcmUtYnRuIG54cy1zaGFyZS1idG4te3twbGF0Zm9ybS5uYW1lfX0gbnhzLXt7ZGlyZWN0aW9ufX0tbWFyZ2luXG4gICAgICAgICAgICAgICAgICB7e3RleHRFbmFibGVkID8gJ254cy1zaGFyZS1idG4td2l0aC10ZXh0JyA6ICcnIH19XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY1wiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48c3ZnOnBhdGggZmlsbD1cIndoaXRlXCIgW2F0dHIuZF09XCJwbGF0Zm9ybS5pY29uXCIgLz48L3N2Zz48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJueHMtc2hhcmVUZXh0XCIgKm5nSWY9XCJ0ZXh0RW5hYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJueHMtc2hhcmVUZXh0LXByaW1hcnlcIj57e3BsYXRmb3JtLnRleHR9fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm54cy1zaGFyZVRleHQtc2Vjb25kYXJ5XCI+e3thZGRlZFRleHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgYCxcbiAgc3R5bGVzOiBbYGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lmlje2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubnhzLXNoYXJlLWJ0bntoZWlnaHQ6MzJweDt3aWR0aDozMnB4O2ZvbnQtd2VpZ2h0OjcwMDtjdXJzb3I6cG9pbnRlcjtjb2xvcjojZWVlO2JvcmRlci1yYWRpdXM6NXB4O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsta2h0bWwtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmV9Lm54cy1ob3Jpem9udGFsLW1hcmdpbnttYXJnaW46MCA1cHh9Lm54cy12ZXJ0aWNhbC1tYXJnaW57bWFyZ2luOjVweCAwfS5ueHMtc2hhcmUtYnRuLXdpdGgtdGV4dHtwYWRkaW5nOi4zZW0gMWVtO3dpZHRoOmF1dG99Lm54cy1zaGFyZS1idG46aG92ZXJ7Y29sb3I6I2ZmZn0ubnhzLXNoYXJlVGV4dHttYXJnaW4tbGVmdDo1cHg7ZGlzcGxheTpmbGV4O2FsaWduLWNvbnRlbnQ6Y2VudGVyfS5ueHMtc2hhcmUtYnRuLWZhY2Vib29re2JhY2tncm91bmQ6IzJkNjA5Yn0ubnhzLXNoYXJlLWJ0bi10d2l0dGVye2JhY2tncm91bmQ6IzAwYzNmM30ubnhzLXNoYXJlLWJ0bi1nb29nbGUtcGx1c3tiYWNrZ3JvdW5kOiNlYjQwMjZ9Lm54cy1zaGFyZS1idG4tbGlua2VkaW57YmFja2dyb3VuZDojMDA3NGExfS5ueHMtc2hhcmUtYnRuLXN0dW1ibGVVcG9ue2JhY2tncm91bmQ6I2ZmNGUyZX0ubnhzLXNoYXJlLWJ0bi10dW1ibHJ7YmFja2dyb3VuZDojMzU0NjVjfS5ueHMtc2hhcmUtYnRuLXBpbnRlcmVzdHtiYWNrZ3JvdW5kOiNjYTIxMmE7Zm9udC1zaXplOjEuMXJlbX0ubnhzLXNoYXJlLWJ0bi1yZWRkaXR7YmFja2dyb3VuZDojZmY1NzAwO2ZvbnQtc2l6ZToxLjFyZW19Lm54cy1zaGFyZS1idG4tbWFpbHtiYWNrZ3JvdW5kOiNmZjJlNDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwbGF0Zm9ybU5hbWU7XG4gIHBsYXRmb3JtOiBQbGF0Zm9ybTtcbiAgQElucHV0KCkgdGV4dEVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFkZGVkVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIHByb3BlcnRpZXM6IFByb3BlcnRpZXM7XG4gIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3Jtc1t0aGlzLnBsYXRmb3JtTmFtZV07XG4gICAgdGhpcy5jb25zdHJ1Y3RVcmwoKTtcbiAgfVxuXG4gIGNsaWNrKGV2ZW50KSB7XG4gICAgd2luZG93Lm9wZW4odGhpcy51cmwsICduZXd3aW5kb3cnLCAnd2lkdGg9MTA3MCwgaGVpZ2h0PTYwMCcpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RVcmwoKSB7XG4gICAgdGhpcy51cmwgPSB0aGlzLnBsYXRmb3JtLnVybCArIHRoaXMucHJvcGVydGllcy51cmw7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0ucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMucHJvcGVydGllc1t0aGlzLnBsYXRmb3JtLnByb3BlcnRpZXNba2V5XV07XG4gICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgdGhpcy51cmwgKz0gYCYke2tleX09JHt2YWx9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5neHNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hzaGFyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbi9zaGFyZS1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4c2hhcmVDb21wb25lbnQsXG4gICAgU2hhcmVCdXR0b25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5neHNoYXJlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4c2hhcmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7eUJBZXVCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7OzJCQUV0RSxLQUFLOzs7OzswQkFRTSxFQUFFOzswQkFFdkIsWUFBWTs7Ozs7SUFFekIsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FB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