/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { platforms } from '../platforms.utils';
export class ShareButtonComponent {
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
if (false) {
    /** @type {?} */
    ShareButtonComponent.prototype.platformName;
    /** @type {?} */
    ShareButtonComponent.prototype.platform;
    /** @type {?} */
    ShareButtonComponent.prototype.textEnabled;
    /** @type {?} */
    ShareButtonComponent.prototype.addedText;
    /** @type {?} */
    ShareButtonComponent.prototype.direction;
    /** @type {?} */
    ShareButtonComponent.prototype.properties;
    /** @type {?} */
    ShareButtonComponent.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neHNoYXJlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi9zaGFyZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFtQnpELE1BQU07SUFTSjt5QkFKcUIsWUFBWTtLQUloQjs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM3RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztvQkFDakQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7cUJBQzlCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O2FBV0M7Z0JBQ1gsTUFBTSxFQUFFLENBQUMseWdDQUF5Z0MsQ0FBQzthQUNwaEM7Ozs7OzJCQUVFLEtBQUs7MEJBRUwsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIHBsYXRmb3JtcyB9IGZyb20gJy4uL3BsYXRmb3Jtcy51dGlscyc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vcHJvcGVydGllcy51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cInt7dGhpcy51cmx9fVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJjbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm54cy1zaGFyZS1idG4gbnhzLXNoYXJlLWJ0bi17e3BsYXRmb3JtLm5hbWV9fSBueHMte3tkaXJlY3Rpb259fS1tYXJnaW5cbiAgICAgICAgICAgICAgICAgIHt7dGV4dEVuYWJsZWQgPyAnbnhzLXNoYXJlLWJ0bi13aXRoLXRleHQnIDogJycgfX1cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljXCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxzdmc6cGF0aCBmaWxsPVwid2hpdGVcIiBbYXR0ci5kXT1cInBsYXRmb3JtLmljb25cIiAvPjwvc3ZnPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm54cy1zaGFyZVRleHRcIiAqbmdJZj1cInRleHRFbmFibGVkXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm54cy1zaGFyZVRleHQtcHJpbWFyeVwiPnt7cGxhdGZvcm0udGV4dH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnhzLXNoYXJlVGV4dC1zZWNvbmRhcnlcIj57e2FkZGVkVGV4dH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBgLFxuICBzdHlsZXM6IFtgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uaWN7ZGlzcGxheTpmbGV4O2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5ueHMtc2hhcmUtYnRue2hlaWdodDozMnB4O3dpZHRoOjMycHg7Zm9udC13ZWlnaHQ6NzAwO2N1cnNvcjpwb2ludGVyO2NvbG9yOiNlZWU7Ym9yZGVyLXJhZGl1czo1cHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1raHRtbC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0ubnhzLWhvcml6b250YWwtbWFyZ2lue21hcmdpbjowIDVweH0ubnhzLXZlcnRpY2FsLW1hcmdpbnttYXJnaW46NXB4IDB9Lm54cy1zaGFyZS1idG4td2l0aC10ZXh0e3BhZGRpbmc6LjNlbSAxZW07d2lkdGg6YXV0b30ubnhzLXNoYXJlLWJ0bjpob3Zlcntjb2xvcjojZmZmfS5ueHMtc2hhcmVUZXh0e21hcmdpbi1sZWZ0OjVweDtkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpjZW50ZXJ9Lm54cy1zaGFyZS1idG4tZmFjZWJvb2t7YmFja2dyb3VuZDojMmQ2MDlifS5ueHMtc2hhcmUtYnRuLXR3aXR0ZXJ7YmFja2dyb3VuZDojMDBjM2YzfS5ueHMtc2hhcmUtYnRuLWdvb2dsZS1wbHVze2JhY2tncm91bmQ6I2ViNDAyNn0ubnhzLXNoYXJlLWJ0bi1saW5rZWRpbntiYWNrZ3JvdW5kOiMwMDc0YTF9Lm54cy1zaGFyZS1idG4tc3R1bWJsZVVwb257YmFja2dyb3VuZDojZmY0ZTJlfS5ueHMtc2hhcmUtYnRuLXR1bWJscntiYWNrZ3JvdW5kOiMzNTQ2NWN9Lm54cy1zaGFyZS1idG4tcGludGVyZXN0e2JhY2tncm91bmQ6I2NhMjEyYTtmb250LXNpemU6MS4xcmVtfS5ueHMtc2hhcmUtYnRuLXJlZGRpdHtiYWNrZ3JvdW5kOiNmZjU3MDA7Zm9udC1zaXplOjEuMXJlbX0ubnhzLXNoYXJlLWJ0bi1tYWlse2JhY2tncm91bmQ6I2ZmMmU0MH1gXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBsYXRmb3JtTmFtZTtcbiAgcGxhdGZvcm06IFBsYXRmb3JtO1xuICBASW5wdXQoKSB0ZXh0RW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWRkZWRUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgcHJvcGVydGllczogUHJvcGVydGllcztcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm1zW3RoaXMucGxhdGZvcm1OYW1lXTtcbiAgICB0aGlzLmNvbnN0cnVjdFVybCgpO1xuICB9XG5cbiAgY2xpY2soZXZlbnQpIHtcbiAgICB3aW5kb3cub3Blbih0aGlzLnVybCwgJ25ld3dpbmRvdycsICd3aWR0aD0xMDcwLCBoZWlnaHQ9NjAwJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdFVybCgpIHtcbiAgICB0aGlzLnVybCA9IHRoaXMucGxhdGZvcm0udXJsICsgdGhpcy5wcm9wZXJ0aWVzLnVybDtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBsYXRmb3JtLnByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0ucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5wcm9wZXJ0aWVzW3RoaXMucGxhdGZvcm0ucHJvcGVydGllc1trZXldXTtcbiAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLnVybCArPSBgJiR7a2V5fT0ke3ZhbH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0=