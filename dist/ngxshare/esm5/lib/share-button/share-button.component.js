/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { platforms } from '../platforms.utils';
var ShareButtonComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'share-button',
                    template: "<a href=\"{{this.url}}\" (click)=\"click($event)\" target='_blank'>\n              <div (click)=\"click($event)\"\n                class=\"nxs-share-btn nxs-share-btn-{{platform.name}} nxs-{{direction}}-margin\n                  {{textEnabled ? 'nxs-share-btn-with-text' : '' }}\">\n                <i class=\"ic\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><svg:path fill=\"white\" [attr.d]=\"platform.icon\" /></svg></i>\n                <span class=\"nxs-shareText\" *ngIf=\"textEnabled\">\n                  <span class=\"nxs-shareText-primary\">{{platform.text}} </span>\n                  <span class=\"nxs-shareText-secondary\">{{addedText}}</span>\n                </span>\n              </div>\n            </a>\n            ",
                    styles: ["a{text-decoration:none}.ic{display:flex;align-content:center;justify-content:center;align-items:center}.nxs-share-btn{height:32px;width:32px;font-weight:700;cursor:pointer;color:#eee;border-radius:5px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn-with-text{padding:.3em 1em;width:auto}.nxs-share-btn:hover{color:#fff}.nxs-shareText{margin-left:5px;display:flex;align-content:center}.nxs-share-btn-facebook{background:#2d609b}.nxs-share-btn-twitter{background:#00c3f3}.nxs-share-btn-google-plus{background:#eb4026}.nxs-share-btn-linkedin{background:#0074a1}.nxs-share-btn-stumbleUpon{background:#ff4e2e}.nxs-share-btn-tumblr{background:#35465c}.nxs-share-btn-pinterest{background:#ca212a;font-size:1.1rem}.nxs-share-btn-reddit{background:#ff5700;font-size:1.1rem}.nxs-share-btn-mail{background:#ff2e40}"]
                }] }
    ];
    /** @nocollapse */
    ShareButtonComponent.ctorParameters = function () { return []; };
    ShareButtonComponent.propDecorators = {
        platformName: [{ type: Input }],
        textEnabled: [{ type: Input }],
        addedText: [{ type: Input }],
        direction: [{ type: Input }],
        properties: [{ type: Input }]
    };
    return ShareButtonComponent;
}());
export { ShareButtonComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neHNoYXJlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi9zaGFyZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJ2RDtRQUpBLGlCQUFxQixZQUFZLENBQUM7S0FJakI7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCxvQ0FBSzs7OztJQUFMLFVBQU0sS0FBSztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM3RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCwyQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDNUIsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O29CQUNoRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNELElBQUksR0FBRyxFQUFFO3dCQUNQLElBQUksQ0FBQyxHQUFHLElBQUksTUFBSSxHQUFHLFNBQUksR0FBSyxDQUFDO3FCQUM5QjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGd4QkFXQzs7aUJBRVo7Ozs7OytCQUVFLEtBQUs7OEJBRUwsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7K0JBMUJSOztTQW9CYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBwbGF0Zm9ybXMgfSBmcm9tICcuLi9wbGF0Zm9ybXMudXRpbHMnO1xuaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gJy4uL3Byb3BlcnRpZXMudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxhIGhyZWY9XCJ7e3RoaXMudXJsfX1cIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJueHMtc2hhcmUtYnRuIG54cy1zaGFyZS1idG4te3twbGF0Zm9ybS5uYW1lfX0gbnhzLXt7ZGlyZWN0aW9ufX0tbWFyZ2luXG4gICAgICAgICAgICAgICAgICB7e3RleHRFbmFibGVkID8gJ254cy1zaGFyZS1idG4td2l0aC10ZXh0JyA6ICcnIH19XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY1wiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48c3ZnOnBhdGggZmlsbD1cIndoaXRlXCIgW2F0dHIuZF09XCJwbGF0Zm9ybS5pY29uXCIgLz48L3N2Zz48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJueHMtc2hhcmVUZXh0XCIgKm5nSWY9XCJ0ZXh0RW5hYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJueHMtc2hhcmVUZXh0LXByaW1hcnlcIj57e3BsYXRmb3JtLnRleHR9fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm54cy1zaGFyZVRleHQtc2Vjb25kYXJ5XCI+e3thZGRlZFRleHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vc2hhcmUtYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBsYXRmb3JtTmFtZTtcbiAgcGxhdGZvcm06IFBsYXRmb3JtO1xuICBASW5wdXQoKSB0ZXh0RW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWRkZWRUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgcHJvcGVydGllczogUHJvcGVydGllcztcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm1zW3RoaXMucGxhdGZvcm1OYW1lXTtcbiAgICB0aGlzLmNvbnN0cnVjdFVybCgpO1xuICB9XG5cbiAgY2xpY2soZXZlbnQpIHtcbiAgICB3aW5kb3cub3Blbih0aGlzLnVybCwgJ25ld3dpbmRvdycsICd3aWR0aD0xMDcwLCBoZWlnaHQ9NjAwJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdFVybCgpIHtcbiAgICB0aGlzLnVybCA9IHRoaXMucGxhdGZvcm0udXJsICsgdGhpcy5wcm9wZXJ0aWVzLnVybDtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBsYXRmb3JtLnByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0ucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5wcm9wZXJ0aWVzW3RoaXMucGxhdGZvcm0ucHJvcGVydGllc1trZXldXTtcbiAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLnVybCArPSBgJiR7a2V5fT0ke3ZhbH1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0=