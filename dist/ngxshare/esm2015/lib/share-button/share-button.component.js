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
                styles: ["a{text-decoration:none}.ic{display:flex;align-content:center;justify-content:center;align-items:center}.nxs-share-btn{height:32px;width:32px;font-weight:700;cursor:pointer;color:#eee;border-radius:5px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn-with-text{padding:.3em 1em;width:auto}.nxs-share-btn:hover{color:#fff}.nxs-shareText{margin-left:5px;display:flex;align-content:center}.nxs-share-btn-facebook{background:#2d609b}.nxs-share-btn-twitter{background:#00c3f3}.nxs-share-btn-google-plus{background:#eb4026}.nxs-share-btn-linkedin{background:#0074a1}.nxs-share-btn-stumbleUpon{background:#ff4e2e}.nxs-share-btn-tumblr{background:#35465c}.nxs-share-btn-pinterest{background:#ca212a;font-size:1.1rem}.nxs-share-btn-reddit{background:#ff5700;font-size:1.1rem}.nxs-share-btn-mail{background:#ff2e40}"]
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neHNoYXJlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi9zaGFyZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFtQnpELE1BQU0sT0FBTyxvQkFBb0I7SUFTL0I7UUFKQSxpQkFBcUIsWUFBWSxDQUFDO0tBSWpCOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDNUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O29CQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNELElBQUksR0FBRyxFQUFFO3dCQUNQLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7cUJBQzlCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O2FBV0M7O2FBRVo7Ozs7OzJCQUVFLEtBQUs7MEJBRUwsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIHBsYXRmb3JtcyB9IGZyb20gJy4uL3BsYXRmb3Jtcy51dGlscyc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vcHJvcGVydGllcy51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cInt7dGhpcy51cmx9fVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJjbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm54cy1zaGFyZS1idG4gbnhzLXNoYXJlLWJ0bi17e3BsYXRmb3JtLm5hbWV9fSBueHMte3tkaXJlY3Rpb259fS1tYXJnaW5cbiAgICAgICAgICAgICAgICAgIHt7dGV4dEVuYWJsZWQgPyAnbnhzLXNoYXJlLWJ0bi13aXRoLXRleHQnIDogJycgfX1cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljXCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxzdmc6cGF0aCBmaWxsPVwid2hpdGVcIiBbYXR0ci5kXT1cInBsYXRmb3JtLmljb25cIiAvPjwvc3ZnPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm54cy1zaGFyZVRleHRcIiAqbmdJZj1cInRleHRFbmFibGVkXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm54cy1zaGFyZVRleHQtcHJpbWFyeVwiPnt7cGxhdGZvcm0udGV4dH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnhzLXNoYXJlVGV4dC1zZWNvbmRhcnlcIj57e2FkZGVkVGV4dH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBgLFxuICBzdHlsZVVybHM6IFsnLi9zaGFyZS1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcGxhdGZvcm1OYW1lO1xuICBwbGF0Zm9ybTogUGxhdGZvcm07XG4gIEBJbnB1dCgpIHRleHRFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBhZGRlZFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybU5hbWVdO1xuICAgIHRoaXMuY29uc3RydWN0VXJsKCk7XG4gIH1cblxuICBjbGljayhldmVudCkge1xuICAgIHdpbmRvdy5vcGVuKHRoaXMudXJsLCAnbmV3d2luZG93JywgJ3dpZHRoPTEwNzAsIGhlaWdodD02MDAnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VXJsKCkge1xuICAgIHRoaXMudXJsID0gdGhpcy5wbGF0Zm9ybS51cmwgKyB0aGlzLnByb3BlcnRpZXMudXJsO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLnByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGxhdGZvcm0ucHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnByb3BlcnRpZXNbdGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzW2tleV1dO1xuICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudXJsICs9IGAmJHtrZXl9PSR7dmFsfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ==