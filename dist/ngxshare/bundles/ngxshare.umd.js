(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngxshare', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global.ngxshare = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,core,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxshareComponent = (function () {
        function NgxshareComponent() {
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
        NgxshareComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.fetchProperties();
            };
        /**
         * @return {?}
         */
        NgxshareComponent.prototype.fetchProperties = /**
         * @return {?}
         */
            function () {
                this.properties.url = this.properties.url || this.getMetaContent('og:url') || window.location.href.toString();
                this.properties.title = this.properties.title || this.getMetaContent('og:title') || document.title;
                this.properties.description = this.properties.description || this.getMetaContent('og:description');
                this.properties.image = this.properties.image || this.getMetaContent('og:image');
                this.properties.via = this.properties.via || this.getMetaContent('nxs:via');
                this.properties.hashtags = this.properties.hashtags || this.getMetaContent('nxs:hashtags');
                for (var p in this.properties) {
                    if (this.properties.hasOwnProperty(p)) {
                        this.properties[p] = encodeURIComponent(this.properties[p]);
                    }
                }
            };
        /**
         * @param {?} property
         * @return {?}
         */
        NgxshareComponent.prototype.getMetaContent = /**
         * @param {?} property
         * @return {?}
         */
            function (property) {
                /** @type {?} */
                var elem = document.querySelector("meta[property='" + property + "']");
                if (elem) {
                    return elem.getAttribute('content');
                }
                return '';
            };
        Object.defineProperty(NgxshareComponent.prototype, "direction", {
            get: /**
             * @return {?}
             */ function () {
                return this._direction;
            },
            // safe check to prevent missuses
            set: /**
             * @param {?} direction
             * @return {?}
             */ function (direction) {
                if (direction === 'vertical') {
                    this._direction = direction;
                }
                else {
                    this._direction = 'horizontal';
                }
            },
            enumerable: true,
            configurable: true
        });
        NgxshareComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'share-container',
                        template: "<div class=\"nxs-shareContainer nxs-{{direction}}\">\n  <!-- Primary share platforms-->\n  <share-button *ngFor=\"let platform of platforms\" [platformName]=\"platform\" [textEnabled]=\"textEnabled\" [addedText]=\"addedText\" [direction]=\"direction\"\n    [properties]=\"properties\">\n  </share-button>\n</div>",
                        styles: ["a{text-decoration:none}.nxs-shareContainer{display:inline-flex;overflow:hidden}.nxs-vertical{flex-direction:column}.nxs-share-btn{font-size:24px;cursor:pointer;color:#eee;border-radius:2px;height:32px;width:32px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn:hover{color:#fff}.nxs-share-btn-more{background:#ccc}"],
                    },] },
        ];
        NgxshareComponent.propDecorators = {
            platforms: [{ type: core.Input }],
            textEnabled: [{ type: core.Input }],
            addedText: [{ type: core.Input }],
            properties: [{ type: core.Input }],
            direction: [{ type: core.Input }]
        };
        return NgxshareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var platforms = {
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
    var ShareButtonComponent = (function () {
        function ShareButtonComponent() {
            this.direction = 'horizontal';
        }
        /**
         * @return {?}
         */
        ShareButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.platform = platforms[this.platformName];
                this.constructUrl();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ShareButtonComponent.prototype.click = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                window.open(this.url, 'newwindow', 'width=1070, height=600');
                event.preventDefault();
            };
        /**
         * @return {?}
         */
        ShareButtonComponent.prototype.constructUrl = /**
         * @return {?}
         */
            function () {
                this.url = this.platform.url + this.properties.url;
                if (this.platform.properties) {
                    for (var key in this.platform.properties) {
                        if (this.platform.properties.hasOwnProperty(key)) {
                            /** @type {?} */
                            var val = this.properties[this.platform.properties[key]];
                            if (val) {
                                this.url += "&" + key + "=" + val;
                            }
                        }
                    }
                }
            };
        ShareButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'share-button',
                        template: "<a href=\"{{this.url}}\" (click)=\"click($event)\" target='_blank'>\n              <div (click)=\"click($event)\"\n                class=\"nxs-share-btn nxs-share-btn-{{platform.name}} nxs-{{direction}}-margin\n                  {{textEnabled ? 'nxs-share-btn-with-text' : '' }}\">\n                <i class=\"ic\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><svg:path fill=\"white\" [attr.d]=\"platform.icon\" /></svg></i>\n                <span class=\"nxs-shareText\" *ngIf=\"textEnabled\">\n                  <span class=\"nxs-shareText-primary\">{{platform.text}} </span>\n                  <span class=\"nxs-shareText-secondary\">{{addedText}}</span>\n                </span>\n              </div>\n            </a>\n            ",
                        styles: ["a{text-decoration:none}.ic{display:flex;align-content:center;justify-content:center;align-items:center}.nxs-share-btn{height:32px;width:32px;font-weight:700;cursor:pointer;color:#eee;border-radius:5px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn-with-text{padding:.3em 1em;width:auto}.nxs-share-btn:hover{color:#fff}.nxs-shareText{margin-left:5px;display:flex;align-content:center}.nxs-share-btn-facebook{background:#2d609b}.nxs-share-btn-twitter{background:#00c3f3}.nxs-share-btn-google-plus{background:#eb4026}.nxs-share-btn-linkedin{background:#0074a1}.nxs-share-btn-stumbleUpon{background:#ff4e2e}.nxs-share-btn-tumblr{background:#35465c}.nxs-share-btn-pinterest{background:#ca212a;font-size:1.1rem}.nxs-share-btn-reddit{background:#ff5700;font-size:1.1rem}.nxs-share-btn-mail{background:#ff2e40}"]
                    },] },
        ];
        /** @nocollapse */
        ShareButtonComponent.ctorParameters = function () { return []; };
        ShareButtonComponent.propDecorators = {
            platformName: [{ type: core.Input }],
            textEnabled: [{ type: core.Input }],
            addedText: [{ type: core.Input }],
            direction: [{ type: core.Input }],
            properties: [{ type: core.Input }]
        };
        return ShareButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxshareModule = (function () {
        function NgxshareModule() {
        }
        NgxshareModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            platformBrowser.BrowserModule
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
        return NgxshareModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgxshareComponent = NgxshareComponent;
    exports.NgxshareModule = NgxshareModule;
    exports.ɵa = ShareButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4c2hhcmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3hzaGFyZS9saWIvbmd4c2hhcmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3hzaGFyZS9saWIvcGxhdGZvcm1zLnV0aWxzLnRzIiwibmc6Ly9uZ3hzaGFyZS9saWIvc2hhcmUtYnV0dG9uL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL25neHNoYXJlL2xpYi9uZ3hzaGFyZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSAnLi9wcm9wZXJ0aWVzLnV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmUtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibnhzLXNoYXJlQ29udGFpbmVyIG54cy17e2RpcmVjdGlvbn19XCI+XG4gIDwhLS0gUHJpbWFyeSBzaGFyZSBwbGF0Zm9ybXMtLT5cbiAgPHNoYXJlLWJ1dHRvbiAqbmdGb3I9XCJsZXQgcGxhdGZvcm0gb2YgcGxhdGZvcm1zXCIgW3BsYXRmb3JtTmFtZV09XCJwbGF0Zm9ybVwiIFt0ZXh0RW5hYmxlZF09XCJ0ZXh0RW5hYmxlZFwiIFthZGRlZFRleHRdPVwiYWRkZWRUZXh0XCIgW2RpcmVjdGlvbl09XCJkaXJlY3Rpb25cIlxuICAgIFtwcm9wZXJ0aWVzXT1cInByb3BlcnRpZXNcIj5cbiAgPC9zaGFyZS1idXR0b24+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0ubnhzLXNoYXJlQ29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWZsZXg7b3ZlcmZsb3c6aGlkZGVufS5ueHMtdmVydGljYWx7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5ueHMtc2hhcmUtYnRue2ZvbnQtc2l6ZToyNHB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOiNlZWU7Ym9yZGVyLXJhZGl1czoycHg7aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LWtodG1sLXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5ueHMtaG9yaXpvbnRhbC1tYXJnaW57bWFyZ2luOjAgNXB4fS5ueHMtdmVydGljYWwtbWFyZ2lue21hcmdpbjo1cHggMH0ubnhzLXNoYXJlLWJ0bjpob3Zlcntjb2xvcjojZmZmfS5ueHMtc2hhcmUtYnRuLW1vcmV7YmFja2dyb3VuZDojY2NjfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hzaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIFBsYXRmb3Jtc1xuICBASW5wdXQoKSBwbGF0Zm9ybXMgPSBbJ3R3aXR0ZXInLCAnZmFjZWJvb2snLCAnZ29vZ2xlUGx1cycsICdyZWRkaXQnLCAncGludGVyZXN0JywgJ2xpbmtlZGluJ107XG4gIC8vIHRlbGxzIGlmIHRoZSB0ZXh0IG11c3QgYmUgZW5hYmxlZCBvbiBwcmltYXJ5IHBsYXRmb3Jtc1xuICBASW5wdXQoKSB0ZXh0RW5hYmxlZCA9IGZhbHNlO1xuICAvLyBUZXh0IGFkZGVkIHRvIHRoZSB2YW5pbGxhIG1lc3NhZ2UsIGV4OiAneW91ciBjcmVhdGlvbicgd2lsbCByZXN1bHQgaW5cbiAgLy8gJ1R3ZWV0IHlvdXIgY3JlYXRpb24nIGZvciB0d2l0dGVyIG9yICdTaGFyZSB5b3VyIGNyZWF0aW9uJyBmb3IgZmJcbiAgQElucHV0KCkgYWRkZWRUZXh0OiBzdHJpbmc7XG4gIC8vIFRoaXMgc2hvdWxkIGJlIHNldCB1cCBkaXJlY3RseSBpbiB0aGUgbWV0YSB0YWdzIGFzIHRoaXMgaXMgZ29vZCBwcmFjdGljZVxuICAvLyBVc2UgdGhpcyBpbnB1dCBvbmx5IGlmIHlvdSBoYXZlIG11bHRpcGxlIGNvbnRlbnQgdG8gc2hhcmUgcGVyIHVybC5cbiAgLy8gU28gaW4gY2FzZSB5b3UgbmVlZCB0aGlzIHRoZSBpbnB1dCBzaG91bGQgYmUgbGlrZSB0aGUgZm9sbG93aW5nIG9iamVjdCAoeW91IGNhbiBvbWl0dCBzb21lIGZpZWxkcylcbiAgLy8ge3RpdGxlOidteSB0aXRsZScsIGRlc2NyaXB0aW9uOidteSBkZXNjJyxpbWc6JyBhbiBpbWFnZScsIHZpYTonQ2VkX1ZEQicsIGhhc2h0YWdzOidzb21lSGFzaFRhZyd9XG4gIEBJbnB1dCgpIHByb3BlcnRpZXM6IFByb3BlcnRpZXMgPSB7fTtcbiAgLy8gaG9yaXpvbnRhbCBsYXlvdXQgb3IgdmVydGljYWwgbGF5b3V0IChfYWNjZXNzZWQgdmlhIGdldHRlciAmIHNldHRlcilcbiAgX2RpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZldGNoUHJvcGVydGllcygpO1xuICB9XG5cbiAgZmV0Y2hQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcy51cmwgPSB0aGlzLnByb3BlcnRpZXMudXJsIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOnVybCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLnRpdGxlID0gdGhpcy5wcm9wZXJ0aWVzLnRpdGxlIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOnRpdGxlJykgfHwgZG9jdW1lbnQudGl0bGU7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uID0gdGhpcy5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOmRlc2NyaXB0aW9uJyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmltYWdlID0gdGhpcy5wcm9wZXJ0aWVzLmltYWdlIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOmltYWdlJyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLnZpYSA9IHRoaXMucHJvcGVydGllcy52aWEgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnbnhzOnZpYScpO1xuICAgIHRoaXMucHJvcGVydGllcy5oYXNodGFncyA9IHRoaXMucHJvcGVydGllcy5oYXNodGFncyB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdueHM6aGFzaHRhZ3MnKTtcbiAgICBmb3IgKGNvbnN0IHAgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twXSA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnByb3BlcnRpZXNbcF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldE1ldGFDb250ZW50KHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtwcm9wZXJ0eT0nJHtwcm9wZXJ0eX0nXWApO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gc2FmZSBjaGVjayB0byBwcmV2ZW50IG1pc3N1c2VzXG4gIEBJbnB1dCgpXG4gIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBwcm9wZXJ0aWVzPzogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybXMgeyAvLyBwbHVyYWxcbiAgICB0d2l0dGVyOiBQbGF0Zm9ybTtcbiAgICBmYWNlYm9vazogUGxhdGZvcm07XG4gICAgZ29vZ2xlUGx1czogUGxhdGZvcm07XG4gICAgcGludGVyZXN0OiBQbGF0Zm9ybTtcbiAgICByZWRkaXQ6IFBsYXRmb3JtO1xuICAgIGxpbmtlZGluOiBQbGF0Zm9ybTtcbiAgICBzdHVtYmxlVXBvbjogUGxhdGZvcm07XG4gICAgdHVtYmxyOiBQbGF0Zm9ybTtcbiAgICBtYWlsOiBQbGF0Zm9ybTtcbn1cblxuZXhwb3J0IGNvbnN0IHBsYXRmb3JtczogUGxhdGZvcm1zID0ge1xuICAgIHR3aXR0ZXI6IHtcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgICAgICB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JyxcbiAgICAgICAgaWNvbjogJ00yMCwxLjljLTAuNywwLjMtMS41LDAuNS0yLjQsMC42YzAuOC0wLjUsMS41LTEuMywxLjgtMi4zYy0wLjgsMC41LTEuNywwLjgtMi42LDFDMTYuMSwwLjUsMTUsMCwxMy44LDBjLTIuMywwLTQuMSwxLjgtNC4xLDQuMWMwLDAuMywwLDAuNiwwLjEsMC45QzYuNCw0LjksMy40LDMuMiwxLjQsMC43QzEsMS40LDAuOCwyLjEsMC44LDIuOGMwLDEuNCwwLjcsMi43LDEuOCwzLjRDMiw2LjIsMS40LDYsMC44LDUuN3YwLjFjMCwyLDEuNCwzLjYsMy4zLDRDMy44LDkuOSwzLjQsOS45LDMsOS45Yy0wLjMsMC0wLjUsMC0wLjgtMC4xYzAuNSwxLjYsMiwyLjgsMy44LDIuOGMtMS40LDEuMS0zLjIsMS44LTUuMSwxLjhjLTAuMywwLTAuNywwLTEtMC4xYzEuOCwxLjIsNCwxLjgsNi4zLDEuOEMxMy44LDE2LjIsMTgsMTAsMTgsNC42bDAtMC41QzE4LjgsMy41LDE5LjUsMi43LDIwLDEuOXonLFxuICAgICAgICB0ZXh0OiAnVHdlZXQnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0ZXh0OiAndGl0bGUnLFxuICAgICAgICAgICAgdmlhOiAndmlhJyxcbiAgICAgICAgICAgIGhhc2h0YWdzOiAnaGFzaHRhZ3MnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdvb2dsZVBsdXM6IHtcbiAgICAgICAgbmFtZTogJ2dvb2dsZS1wbHVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPScsXG4gICAgICAgIGljb246ICdNNyw3LjdoMy4xYy0wLjUsMS42LTIsMi43LTMuOCwyLjZjLTIuMSwwLTMuOS0xLjctMy45LTMuOGMtMC4xLTIuMywxLjctNC4xLDQtNC4xYzEsMCwyLDAuNCwyLjcsMWMwLjIsMC4yLDAuNCwwLjIsMC42LDBsMS4xLTEuMWMwLjItMC4yLDAuMi0wLjUsMC0wLjZDOS43LDAuNyw4LjIsMCw2LjUsMEMzLTAuMSwwLDIuOCwwLDYuNGMwLDMuNiwyLjgsNi40LDYuNCw2LjRcdGMzLjQsMCw2LjItMi43LDYuNC02YzAsMCwwLTEuNSwwLTEuNUg3Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2MS42QzYuNiw3LjUsNi44LDcuNyw3LDcuN3onLFxuICAgICAgICB0ZXh0OiAnU2hhcmUnLFxuICAgIH0sXG4gICAgZmFjZWJvb2s6IHtcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0nLFxuICAgICAgICBpY29uOiAnTTYuNywyMHYtOS4xaDMuMWwwLjUtMy42SDYuN1Y1LjFjMC0xLDAuMy0xLjcsMS44LTEuN2wxLjksMFYwLjFDMTAuMSwwLjEsOC45LDAsNy42LDBDNC45LDAsMy4xLDEuNywzLjEsNC43djIuNkgwdjMuNmgzLjFWMjBINi43eicsXG4gICAgICAgIHRleHQ6ICdTaGFyZScsXG4gICAgfSxcbiAgICByZWRkaXQ6IHtcbiAgICAgICAgbmFtZTogJ3JlZGRpdCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/dXJsPScsXG4gICAgICAgIGljb246ICdNMTQuMyw5LjFjMC4xLDAuMSwwLjEsMC4zLDAuMSwwLjRjMCwwLjMtMC4xLDAuNS0wLjMsMC44Yy0wLjIsMC4yLTAuNCwwLjQtMC42LDAuNWgwYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwYy0wLjEsMC0wLjIsMC4xLTAuNCwwLjFjLTAuMywwLTAuNi0wLjEtMC44LTAuM2MtMC4yLTAuMi0wLjQtMC40LTAuNS0wLjdoMGMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGgwYzAtMC4xLDAtMC4yLDAtMC4yYzAtMC4zLDAuMS0wLjUsMC4yLTAuN2MwLjEtMC4yLDAuNC0wLjQsMC42LTAuNWMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGMwLjEtMC4xLDAuMy0wLjEsMC40LTAuMWMwLjMsMCwwLjUsMC4xLDAuNywwLjJDMTQsOC42LDE0LjIsOC44LDE0LjMsOS4xQzE0LjMsOS4xLDE0LjMsOS4xLDE0LjMsOS4xQzE0LjMsOS4xLDE0LjMsOS4xLDE0LjMsOS4xTDE0LjMsOS4xTDE0LjMsOS4xeiBNMTMuNSwxMi4zYy0wLjEtMC4xLTAuMi0wLjEtMC4zLTAuMWMtMC4xLDAtMC4yLDAtMC4zLDAuMWwwLDBjLTAuOSwwLjUtMS45LDAuOC0zLDAuOGMtMC44LDAtMS41LTAuMi0yLjItMC41bDAsMGwwLDBjLTAuMSwwLTAuMi0wLjEtMC40LTAuMmMtMC4xLDAtMC4xLTAuMS0wLjItMC4xYy0wLjEsMC0wLjItMC4xLTAuMy0wLjFjLTAuMSwwLTAuMiwwLTAuMiwwLjFjMCwwLDAsMCwwLDBoMGMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLDAuMiwwLjEsMC4zYzAuMSwwLjEsMC4xLDAuMiwwLjIsMC4yYzEsMC43LDIuMiwxLDMuMywxYzEuMSwwLDIuMS0wLjIsMy4xLTAuN2wwLDBsMCwwYzAuMS0wLjEsMC4zLTAuMSwwLjQtMC4yYzAuMSwwLDAuMi0wLjEsMC4yLTAuMmMwLjEtMC4xLDAuMS0wLjIsMC4xLTAuM3YwYzAsMCwwLTAuMSwwLTAuMWMwLTAuMSwwLTAuMi0wLjEtMC4yQzEzLjcsMTIuNSwxMy42LDEyLjQsMTMuNSwxMi4zeiBNNi41LDEwLjdDNi41LDEwLjcsNi41LDEwLjcsNi41LDEwLjdjMC4xLDAsMC4zLDAuMSwwLjQsMC4xYzAuMywwLDAuNi0wLjEsMC45LTAuM0M4LDEwLjIsOC4yLDkuOSw4LjIsOS41YzAsMCwwLDAsMCwwYzAsMCwwLDAsMC0wLjFjMC0wLjMtMC4yLTAuNy0wLjQtMC45QzcuNSw4LjQsNy4yLDguMiw2LjksOC4yYy0wLjEsMC0wLjIsMC0wLjMsMGMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMEM2LjIsOC40LDUuOCw4LjcsNS43LDkuMWwwLDB2MGMwLDAsMCwwLDAsMGMwLDAuMS0wLjEsMC4yLTAuMSwwLjRjMCwwLjMsMC4xLDAuNSwwLjIsMC43QzYsMTAuNCw2LjIsMTAuNiw2LjUsMTAuN0M2LjUsMTAuNyw2LjUsMTAuNyw2LjUsMTAuN3ogTTIwLDcuNUwyMCw3LjVjMCwwLDAsMC4xLDAsMC4xYzAsMC41LTAuMiwxLTAuNCwxLjNjLTAuMiwwLjQtMC42LDAuNy0xLDAuOWMwLDAuMiwwLDAuNCwwLDAuNmMwLDEtMC40LDIuMS0xLDIuOXYwaDBjLTEuMiwxLjUtMi45LDIuNS00LjcsMi45aDBsMCwwYy0xLDAuMi0yLDAuNC0yLjksMC40Yy0xLjUsMC0yLjktMC4zLTQuMy0wLjhsMCwwaDBDNC4yLDE1LjMsMi45LDE0LjMsMiwxM2MtMC40LTAuNy0wLjctMS42LTAuNy0yLjRjMC0wLjIsMC0wLjQsMC0wLjZDMSw5LjcsMC43LDkuNCwwLjQsOS4xQzAuMiw4LjcsMCw4LjIsMCw3Ljd2MHYwdjBDMCw3LjEsMC4zLDYuNCwwLjcsNmMwLjQtMC41LDEuMS0wLjgsMS43LTAuOGMwLDAsMCwwLDAsMGMwLjEsMCwwLjEsMCwwLjIsMGMwLjMsMCwwLjcsMC4xLDEsMC4ybDAsMGwwLDBDNCw1LjUsNC4yLDUuNiw0LjUsNS44YzAuMSwwLDAuMi0wLjEsMC4zLTAuMWMxLjQtMC45LDMuMS0xLjIsNC44LTEuM0M5LjUsMy42LDkuNiwyLjgsMTAsMmMwLjMtMC42LDAuOS0xLjEsMS42LTEuM2wwLDBsMCwwYzAuMy0wLjEsMC41LTAuMSwwLjgtMC4xYzAuNywwLDEuNCwwLjIsMiwwLjRjMC4zLTAuNCwwLjctMC44LDEuMi0wLjlsMCwwbDAsMEMxNS44LDAuMSwxNi4xLDAsMTYuNCwwYzAuMywwLDAuNiwwLjEsMC45LDAuMnYwYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwYzAuNCwwLjIsMC44LDAuNSwxLDAuOGMwLjMsMC40LDAuNCwwLjgsMC40LDEuM2MwLDAuMSwwLDAuMiwwLDAuM2wwLDBjMCwwLDAsMCwwLDBjMCwwLjYtMC40LDEuMS0wLjgsMS41Yy0wLjQsMC40LTEsMC42LTEuNiwwLjZjLTAuMSwwLTAuMiwwLTAuMywwYy0wLjYsMC0xLjEtMC4zLTEuNS0wLjdDMTQuMywzLjUsMTQsMywxNCwyLjRjMCwwLDAtMC4xLDAtMC4xYy0wLjUtMC4yLTEuMS0wLjQtMS43LTAuNGMtMC4xLDAtMC4yLDAtMC4yLDBoMGMtMC40LDAtMC44LDAuMy0xLDAuN3YwdjBjLTAuMywwLjYtMC4zLDEuMi0wLjQsMS45YzEuNiwwLjEsMy4yLDAuNSw0LjcsMS4zaDBsMCwwYzAsMCwwLjEsMCwwLjEsMC4xYzAuMS0wLjEsMC4yLTAuMiwwLjMtMC4yYzAuNC0wLjMsMC45LTAuNCwxLjUtMC40YzAuMiwwLDAuNSwwLDAuNywwLjFoMGwwLDBjMCwwLDAsMCwwLDB2MGMwLjUsMC4xLDEsMC40LDEuMywwLjhDMTkuNyw2LjUsMjAsNywyMCw3LjVMMjAsNy41TDIwLDcuNUwyMCw3LjV6IE0xNS4zLDIuM0MxNS4zLDIuMywxNS4zLDIuMywxNS4zLDIuM0wxNS4zLDIuM0wxNS4zLDIuM2MwLDAuNCwwLjEsMC42LDAuMywwLjhjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNoMGgwYzAsMCwwLDAsMC4xLDBjMC4zLDAsMC41LTAuMSwwLjgtMC4zYzAuMi0wLjIsMC4zLTAuNSwwLjQtMC43bDAsMHYwYzAsMCwwLDAsMC0wLjFjMC0wLjMtMC4xLTAuNi0wLjMtMC44Yy0wLjItMC4yLTAuNS0wLjMtMC44LTAuM2MtMC4xLDAtMC4yLDAtMC4zLDBsMCwwbDAsMGMtMC4yLDAuMS0wLjQsMC4yLTAuNiwwLjRDMTUuMywxLjgsMTUuMywyLDE1LjMsMi4zeiBNMy40LDYuNkMzLjEsNi41LDIuOSw2LjQsMi43LDYuNGMwLDAtMC4xLDAtMC4xLDBoMGwwLDBjLTAuMywwLTAuNiwwLjEtMC45LDAuNEMxLjUsNywxLjMsNy4zLDEuMyw3LjZ2MGwwLDBjMCwwLDAsMC4xLDAsMC4xYzAsMC4yLDAuMSwwLjQsMC4yLDAuNmMwLjEsMC4xLDAuMiwwLjMsMC4zLDAuNEMyLjEsNy44LDIuNyw3LjIsMy40LDYuNnogTTE3LjQsMTAuNWMwLTAuNy0wLjMtMS40LTAuNy0yYy0wLjgtMS4yLTIuMS0xLjktMy41LTIuNGwwLDBjLTAuMy0wLjEtMC41LTAuMi0wLjgtMC4yYy0wLjgtMC4yLTEuNi0wLjMtMi40LTAuM2MtMS4xLDAtMi4yLDAuMi0zLjIsMC41QzUuNCw2LjYsNC4xLDcuMywzLjMsOC41djBjLTAuNCwwLjYtMC43LDEuMy0wLjcsMmMwLDAuMywwLDAuNSwwLjEsMC44bDAsMGMwLjIsMC42LDAuNSwxLjEsMC44LDEuNmMwLjQsMC41LDAuOSwwLjgsMS40LDEuMmMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMmMxLjQsMC44LDMuMSwxLjIsNC44LDEuMmMwLjMsMCwwLjYsMCwwLjgsMGMxLjctMC4xLDMuMy0wLjYsNC43LTEuNmwwLDBjMC40LTAuMywwLjgtMC43LDEuMS0xLjFjMC4zLTAuNCwwLjUtMC45LDAuNy0xLjV2MGwwLDBDMTcuNCwxMC45LDE3LjQsMTAuNywxNy40LDEwLjV6IE0xOC43LDcuN2MwLTAuMiwwLTAuMy0wLjEtMC41bDAsMGwwLDBjLTAuMS0wLjItMC4zLTAuNC0wLjUtMC41Yy0wLjItMC4xLTAuNS0wLjItMC43LTAuMmMtMC4yLDAtMC41LDAuMS0wLjcsMC4yYzAuNywwLjYsMS4yLDEuMywxLjYsMi4xYzAuMS0wLjEsMC4yLTAuMiwwLjMtMC40QzE4LjcsOC4xLDE4LjcsNy45LDE4LjcsNy43eicsXG4gICAgICAgIHRleHQ6ICdTdWJtaXQnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ3RpdGxlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwaW50ZXJlc3Q6IHtcbiAgICAgICAgbmFtZTogJ3BpbnRlcmVzdCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/dXJsPScsXG4gICAgICAgIGljb246ICdNMTMuNywyYy0xLjQtMS4zLTMuMy0yLTUuNC0yQzUuMSwwLDMuMiwxLjMsMi4xLDIuNEMwLjgsMy43LDAsNS41LDAsNy4zYzAsMi4yLDAuOSwzLjksMi41LDQuNmMwLjEsMCwwLjIsMC4xLDAuMywwLjFjMC4zLDAsMC42LTAuMiwwLjctMC42YzAuMS0wLjIsMC4yLTAuNywwLjItMC45YzAuMS0wLjQsMC0wLjYtMC4yLTAuOUMzLDksMi44LDguNCwyLjgsNy42YzAtMi40LDEuOC01LDUuMi01YzIuNywwLDQuMywxLjUsNC4zLDRjMCwxLjUtMC4zLDMtMC45LDRjLTAuNCwwLjctMS4yLDEuNi0yLjMsMS42Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjZjLTAuMy0wLjMtMC4zLTAuOC0wLjItMS4yYzAuMS0wLjUsMC4zLTEsMC40LTEuNUM4LjQsNy45LDguNyw3LDguNyw2LjNjMC0xLjItMC43LTItMS44LTJjLTEuNCwwLTIuNSwxLjQtMi41LDMuMmMwLDAuOSwwLjIsMS41LDAuMywxLjhjLTAuMiwwLjctMS4yLDUuMi0xLjQsNmMtMC4xLDAuNS0wLjgsNC4zLDAuMyw0LjZjMS4zLDAuMywyLjQtMy40LDIuNS0zLjhjMC4xLTAuMywwLjQtMS42LDAuNi0yLjRjMC42LDAuNiwxLjYsMSwyLjYsMWMxLjgsMCwzLjUtMC44LDQuNi0yLjNjMS4xLTEuNCwxLjctMy41LDEuNy01LjdDMTUuNyw1LDE1LDMuMywxMy43LDJ6JyxcbiAgICAgICAgdGV4dDogJ1BpbicsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndGl0bGUnLFxuICAgICAgICAgICAgbWVkaWE6ICdpbWFnZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbGlua2VkaW46IHtcbiAgICAgICAgbmFtZTogJ2xpbmtlZGluJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9JyxcbiAgICAgICAgaWNvbjogJ00yMCwxMS43djcuNGgtNC4zdi02LjljMC0xLjctMC42LTIuOS0yLjItMi45Yy0xLjIsMC0xLjksMC44LTIuMiwxLjZjLTAuMSwwLjMtMC4xLDAuNy0wLjEsMXY3LjJINi45YzAsMCwwLjEtMTEuNywwLTEyLjloNC4zVjhjMCwwLDAsMCwwLDBoMHYwYzAuNi0wLjksMS42LTIuMSwzLjktMi4xQzE3LjksNS45LDIwLDcuOCwyMCwxMS43eiBNMi40LDBDMSwwLDAsMSwwLDIuMmMwLDEuMiwwLjksMi4yLDIuNCwyLjJoMGMxLjUsMCwyLjQtMSwyLjQtMi4yQzQuOCwxLDMuOSwwLDIuNCwweiBNMC4zLDE5LjFoNC4zVjYuMkgwLjNWMTkuMXonLFxuICAgICAgICB0ZXh0OiAnU2hhcmUnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ3RpdGxlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdHVtYmxlVXBvbjoge1xuICAgICAgICBuYW1lOiAnc3R1bWJsZVVwb24nLFxuICAgICAgICB1cmw6ICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/dXJsPScsXG4gICAgICAgIGljb246ICdNMjAsMTQuNGMwLDEuOS0xLjUsMy40LTMuNCwzLjRIMTZjLTEuOSwwLTMuNC0xLjUtMy40LTMuNHYtNC4zYzAtMC43LTAuNS0xLjItMS4yLTEuMkg2LjhjLTAuNywwLTEuMiwwLjUtMS4yLDEuMWMwLDAuNiwwLjYsMS4yLDEuMywxLjJsMC43LDBjMS45LDAuMSwzLjQsMS42LDMuMywzLjRjLTAuMSwxLjctMS42LDMuMi0zLjUsMy4ySDB2LTIuMmg3LjNjMC43LDAsMS4zLTAuNSwxLjMtMWMwLTAuNS0wLjUtMS0xLjItMS4xbC0wLjcsMGMtMS45LTAuMS0zLjQtMS42LTMuNC0zLjVjMC0xLjgsMS41LTMuMywzLjQtMy4zaDQuNmMxLjksMCwzLjQsMS41LDMuNCwzLjR2NC4zYzAsMC43LDAuNSwxLjIsMS4yLDEuMmgwLjZjMC43LDAsMS4yLTAuNSwxLjItMS4yVjBoMmMwLjEsMCwwLjIsMCwwLjIsMFYxNC40eicsXG4gICAgICAgIHRleHQ6ICdzdHVtYmxldXBvbicsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHR1bWJscjoge1xuICAgICAgICBuYW1lOiAndHVtYmxyJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy50dW1ibHIuY29tL3NoYXJlL2xpbms/dXJsPScsXG4gICAgICAgIGljb246ICdNMTAuNSwxNS45YzAsMC0wLjYsMC43LTEuNywwLjdzLTEuNi0wLjctMS42LTEuN2MwLTAuNCwwLTIuOSwwLTUuN2gzLjZWNS43SDcuMmMwLTMuMSwwLTUuNywwLTUuN0g0LjRDNCwyLjYsMi4zLDQuNywwLDUuN3YzLjRoMi43YzAsMy4zLDAsNi40LDAsNi42YzAsMC45LDAuOSw0LjIsNS4zLDQuMmMyLjYsMCwzLjYtMS43LDMuNi0xLjdMMTAuNSwxNS45eicsXG4gICAgICAgIHRleHQ6ICdTaGFyZScsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgICAgICAgY2FwdGlvbjogJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtYWlsOiB7XG4gICAgICAgIG5hbWU6ICdtYWlsJyxcbiAgICAgICAgdXJsOiAnbWFpbHRvOj9zdWJqZWN0PScsXG4gICAgICAgIGljb246ICdNMTguNCwwSDEuNkMwLjcsMCwwLDAuNywwLDEuNnYxMWMwLDAuOSwwLjcsMS42LDEuNiwxLjZoMTYuOGMwLjksMCwxLjYtMC43LDEuNi0xLjZ2LTExQzIwLDAuNywxOS4zLDAsMTguNCwweiBNMTguNCwwLjZjMC4yLDAsMC4zLDAuMSwwLjUsMC4xbC04LjEsNy4xYy0wLjQsMC40LTEuMSwwLjQtMS41LDBMMS4xLDAuN2MwLjEtMC4xLDAuMy0wLjEsMC41LTAuMUgxOC40eiBNMTkuNCwxMi42YzAsMC42LTAuNSwxLTEsMUgxLjZjLTAuNiwwLTEtMC41LTEtMXYtMTFjMC0wLjEsMC0wLjIsMC4xLTAuM0w3LjIsN2wtMy42LDMuNGMtMC4xLDAuMi0wLjEsMC40LDAsMC41QzMuNiwxMSwzLjcsMTEsMy44LDExQzMuOSwxMSw0LDExLDQsMTAuOWwzLjgtMy41bDEsMC45QzkuMSw4LjYsOS42LDguNywxMCw4LjdzMC45LTAuMSwxLjItMC40bDEuMS0wLjljMCwwLDAsMCwwLDBsMy43LDMuNWMwLDAuMSwwLjEsMC4xLDAuMiwwLjFjMC4xLDAsMC4yLTAuMSwwLjMtMC4xYzAuMS0wLjIsMC4xLTAuNCwwLTAuNWwtMy43LTMuNWw2LjUtNS43YzAsMC4xLDAuMSwwLjIsMC4xLDAuNFYxMi42eicsXG4gICAgICAgIHRleHQ6ICdNYWlsJyxcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgcGxhdGZvcm1zIH0gZnJvbSAnLi4vcGxhdGZvcm1zLnV0aWxzJztcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tICcuLi9wcm9wZXJ0aWVzLnV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmUtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8YSBocmVmPVwie3t0aGlzLnVybH19XCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibnhzLXNoYXJlLWJ0biBueHMtc2hhcmUtYnRuLXt7cGxhdGZvcm0ubmFtZX19IG54cy17e2RpcmVjdGlvbn19LW1hcmdpblxuICAgICAgICAgICAgICAgICAge3t0ZXh0RW5hYmxlZCA/ICdueHMtc2hhcmUtYnRuLXdpdGgtdGV4dCcgOiAnJyB9fVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PHN2ZzpwYXRoIGZpbGw9XCJ3aGl0ZVwiIFthdHRyLmRdPVwicGxhdGZvcm0uaWNvblwiIC8+PC9zdmc+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnhzLXNoYXJlVGV4dFwiICpuZ0lmPVwidGV4dEVuYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnhzLXNoYXJlVGV4dC1wcmltYXJ5XCI+e3twbGF0Zm9ybS50ZXh0fX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJueHMtc2hhcmVUZXh0LXNlY29uZGFyeVwiPnt7YWRkZWRUZXh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGAsXG4gIHN0eWxlczogW2Bhe3RleHQtZGVjb3JhdGlvbjpub25lfS5pY3tkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm54cy1zaGFyZS1idG57aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtmb250LXdlaWdodDo3MDA7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6I2VlZTtib3JkZXItcmFkaXVzOjVweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LWtodG1sLXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5ueHMtaG9yaXpvbnRhbC1tYXJnaW57bWFyZ2luOjAgNXB4fS5ueHMtdmVydGljYWwtbWFyZ2lue21hcmdpbjo1cHggMH0ubnhzLXNoYXJlLWJ0bi13aXRoLXRleHR7cGFkZGluZzouM2VtIDFlbTt3aWR0aDphdXRvfS5ueHMtc2hhcmUtYnRuOmhvdmVye2NvbG9yOiNmZmZ9Lm54cy1zaGFyZVRleHR7bWFyZ2luLWxlZnQ6NXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OmNlbnRlcn0ubnhzLXNoYXJlLWJ0bi1mYWNlYm9va3tiYWNrZ3JvdW5kOiMyZDYwOWJ9Lm54cy1zaGFyZS1idG4tdHdpdHRlcntiYWNrZ3JvdW5kOiMwMGMzZjN9Lm54cy1zaGFyZS1idG4tZ29vZ2xlLXBsdXN7YmFja2dyb3VuZDojZWI0MDI2fS5ueHMtc2hhcmUtYnRuLWxpbmtlZGlue2JhY2tncm91bmQ6IzAwNzRhMX0ubnhzLXNoYXJlLWJ0bi1zdHVtYmxlVXBvbntiYWNrZ3JvdW5kOiNmZjRlMmV9Lm54cy1zaGFyZS1idG4tdHVtYmxye2JhY2tncm91bmQ6IzM1NDY1Y30ubnhzLXNoYXJlLWJ0bi1waW50ZXJlc3R7YmFja2dyb3VuZDojY2EyMTJhO2ZvbnQtc2l6ZToxLjFyZW19Lm54cy1zaGFyZS1idG4tcmVkZGl0e2JhY2tncm91bmQ6I2ZmNTcwMDtmb250LXNpemU6MS4xcmVtfS5ueHMtc2hhcmUtYnRuLW1haWx7YmFja2dyb3VuZDojZmYyZTQwfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcGxhdGZvcm1OYW1lO1xuICBwbGF0Zm9ybTogUGxhdGZvcm07XG4gIEBJbnB1dCgpIHRleHRFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBhZGRlZFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybU5hbWVdO1xuICAgIHRoaXMuY29uc3RydWN0VXJsKCk7XG4gIH1cblxuICBjbGljayhldmVudCkge1xuICAgIHdpbmRvdy5vcGVuKHRoaXMudXJsLCAnbmV3d2luZG93JywgJ3dpZHRoPTEwNzAsIGhlaWdodD02MDAnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VXJsKCkge1xuICAgIHRoaXMudXJsID0gdGhpcy5wbGF0Zm9ybS51cmwgKyB0aGlzLnByb3BlcnRpZXMudXJsO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLnByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGxhdGZvcm0ucHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnByb3BlcnRpZXNbdGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzW2tleV1dO1xuICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudXJsICs9IGAmJHtrZXl9PSR7dmFsfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ3hzaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4c2hhcmUuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS1idXR0b24vc2hhcmUtYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neHNoYXJlQ29tcG9uZW50LFxuICAgIFNoYXJlQnV0dG9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3hzaGFyZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neHNoYXJlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIklucHV0IiwiTmdNb2R1bGUiLCJCcm93c2VyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs2QkFldUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQzs7K0JBRXRFLEtBQUs7Ozs7OzhCQVFNLEVBQUU7OzhCQUV2QixZQUFZOzs7OztRQUV6QixvQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCOzs7O1FBRUQsMkNBQWU7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDbkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNuRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMzRixLQUFLLElBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3RDtpQkFDRjthQUNGOzs7OztRQUVELDBDQUFjOzs7O1lBQWQsVUFBZSxRQUFnQjs7Z0JBQzdCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQWtCLFFBQVEsT0FBSSxDQUFDLENBQUM7Z0JBQ3BFLElBQUksSUFBSSxFQUFFO29CQUNSLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDckM7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUdELHNCQUNJLHdDQUFTOzs7Z0JBUWI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hCOzs7OztnQkFYRCxVQUNjLFNBQVM7Z0JBQ3JCLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7aUJBQzdCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO2lCQUNoQzthQUNGOzs7V0FBQTs7b0JBNURGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLDBUQUtMO3dCQUNMLE1BQU0sRUFBRSxDQUFDLCtoQkFBK2hCLENBQUM7cUJBQzFpQjs7O2dDQUdFQyxVQUFLO2tDQUVMQSxVQUFLO2dDQUdMQSxVQUFLO2lDQUtMQSxVQUFLO2dDQStCTEEsVUFBSzs7Z0NBeERSOzs7Ozs7OztBQ21CQSxRQUFhLFNBQVMsR0FBYztRQUNoQyxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUztZQUNmLEdBQUcsRUFBRSx1Q0FBdUM7WUFDNUMsSUFBSSxFQUFFLHliQUF5YjtZQUMvYixJQUFJLEVBQUUsT0FBTztZQUNiLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsS0FBSztnQkFDVixRQUFRLEVBQUUsVUFBVTthQUN2QjtTQUNKO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLG9DQUFvQztZQUN6QyxJQUFJLEVBQUUsMFNBQTBTO1lBQ2hULElBQUksRUFBRSxPQUFPO1NBQ2hCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLDhDQUE4QztZQUNuRCxJQUFJLEVBQUUsaUlBQWlJO1lBQ3ZJLElBQUksRUFBRSxPQUFPO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFFBQVE7WUFDZCxHQUFHLEVBQUUsbUNBQW1DO1lBQ3hDLElBQUksRUFBRSw4Z0hBQThnSDtZQUNwaEgsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLE9BQU87YUFDakI7U0FDSjtRQUNELFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxXQUFXO1lBQ2pCLEdBQUcsRUFBRSwrQ0FBK0M7WUFDcEQsSUFBSSxFQUFFLGduQkFBZ25CO1lBQ3RuQixJQUFJLEVBQUUsS0FBSztZQUNYLFVBQVUsRUFBRTtnQkFDUixXQUFXLEVBQUUsT0FBTztnQkFDcEIsS0FBSyxFQUFFLE9BQU87YUFDakI7U0FDSjtRQUNELFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxVQUFVO1lBQ2hCLEdBQUcsRUFBRSxxREFBcUQ7WUFDMUQsSUFBSSxFQUFFLCtTQUErUztZQUNyVCxJQUFJLEVBQUUsT0FBTztZQUNiLFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsT0FBTzthQUNqQjtTQUNKO1FBQ0QsV0FBVyxFQUFFO1lBQ1QsSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLHdDQUF3QztZQUM3QyxJQUFJLEVBQUUsZ1pBQWdaO1lBQ3RaLElBQUksRUFBRSxhQUFhO1lBQ25CLFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsT0FBTzthQUNqQjtTQUNKO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLFFBQVE7WUFDZCxHQUFHLEVBQUUsdUNBQXVDO1lBQzVDLElBQUksRUFBRSwwTUFBME07WUFDaE4sSUFBSSxFQUFFLE9BQU87WUFDYixVQUFVLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLGFBQWE7YUFDekI7U0FDSjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixJQUFJLEVBQUUseWlCQUF5aUI7WUFDL2lCLElBQUksRUFBRSxNQUFNO1NBQ2Y7S0FDSixDQUFDOzs7Ozs7QUNoR0Y7UUE2QkU7NkJBSnFCLFlBQVk7U0FJaEI7Ozs7UUFFakIsdUNBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCOzs7OztRQUVELG9DQUFLOzs7O1lBQUwsVUFBTSxLQUFLO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCOzs7O1FBRUQsMkNBQVk7OztZQUFaO2dCQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQzVCLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7d0JBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzs0QkFDaEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxJQUFJLEdBQUcsRUFBRTtnQ0FDUCxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQUksR0FBRyxTQUFJLEdBQUssQ0FBQzs2QkFDOUI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjs7b0JBakRGRCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxneEJBV0M7d0JBQ1gsTUFBTSxFQUFFLENBQUMseWdDQUF5Z0MsQ0FBQztxQkFDcGhDOzs7OzttQ0FFRUMsVUFBSztrQ0FFTEEsVUFBSztnQ0FDTEEsVUFBSztnQ0FDTEEsVUFBSztpQ0FDTEEsVUFBSzs7bUNBMUJSOzs7Ozs7O0FDQUE7Ozs7b0JBS0NDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLDZCQUFhO3lCQUNkO3dCQUNELFlBQVksRUFBRTs0QkFDWixpQkFBaUI7NEJBQ2pCLG9CQUFvQjt5QkFDckI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLGlCQUFpQjt5QkFDbEI7cUJBQ0Y7OzZCQWhCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==