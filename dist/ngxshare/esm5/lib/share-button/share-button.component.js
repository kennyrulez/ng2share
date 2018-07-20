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
                },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neHNoYXJlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi9zaGFyZS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJ2RDt5QkFKcUIsWUFBWTtLQUloQjs7OztJQUVqQix1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELG9DQUFLOzs7O0lBQUwsVUFBTSxLQUFLO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELDJDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQ2pELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDUixJQUFJLENBQUMsR0FBRyxJQUFJLE1BQUksR0FBRyxTQUFJLEdBQUssQ0FBQztxQkFDOUI7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxneEJBV0M7b0JBQ1gsTUFBTSxFQUFFLENBQUMseWdDQUF5Z0MsQ0FBQztpQkFDcGhDOzs7OzsrQkFFRSxLQUFLOzhCQUVMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7OytCQTFCUjs7U0FvQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgcGxhdGZvcm1zIH0gZnJvbSAnLi4vcGxhdGZvcm1zLnV0aWxzJztcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tICcuLi9wcm9wZXJ0aWVzLnV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmUtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8YSBocmVmPVwie3t0aGlzLnVybH19XCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibnhzLXNoYXJlLWJ0biBueHMtc2hhcmUtYnRuLXt7cGxhdGZvcm0ubmFtZX19IG54cy17e2RpcmVjdGlvbn19LW1hcmdpblxuICAgICAgICAgICAgICAgICAge3t0ZXh0RW5hYmxlZCA/ICdueHMtc2hhcmUtYnRuLXdpdGgtdGV4dCcgOiAnJyB9fVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PHN2ZzpwYXRoIGZpbGw9XCJ3aGl0ZVwiIFthdHRyLmRdPVwicGxhdGZvcm0uaWNvblwiIC8+PC9zdmc+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnhzLXNoYXJlVGV4dFwiICpuZ0lmPVwidGV4dEVuYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnhzLXNoYXJlVGV4dC1wcmltYXJ5XCI+e3twbGF0Zm9ybS50ZXh0fX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJueHMtc2hhcmVUZXh0LXNlY29uZGFyeVwiPnt7YWRkZWRUZXh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGAsXG4gIHN0eWxlczogW2Bhe3RleHQtZGVjb3JhdGlvbjpub25lfS5pY3tkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm54cy1zaGFyZS1idG57aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtmb250LXdlaWdodDo3MDA7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6I2VlZTtib3JkZXItcmFkaXVzOjVweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LWtodG1sLXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5ueHMtaG9yaXpvbnRhbC1tYXJnaW57bWFyZ2luOjAgNXB4fS5ueHMtdmVydGljYWwtbWFyZ2lue21hcmdpbjo1cHggMH0ubnhzLXNoYXJlLWJ0bi13aXRoLXRleHR7cGFkZGluZzouM2VtIDFlbTt3aWR0aDphdXRvfS5ueHMtc2hhcmUtYnRuOmhvdmVye2NvbG9yOiNmZmZ9Lm54cy1zaGFyZVRleHR7bWFyZ2luLWxlZnQ6NXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OmNlbnRlcn0ubnhzLXNoYXJlLWJ0bi1mYWNlYm9va3tiYWNrZ3JvdW5kOiMyZDYwOWJ9Lm54cy1zaGFyZS1idG4tdHdpdHRlcntiYWNrZ3JvdW5kOiMwMGMzZjN9Lm54cy1zaGFyZS1idG4tZ29vZ2xlLXBsdXN7YmFja2dyb3VuZDojZWI0MDI2fS5ueHMtc2hhcmUtYnRuLWxpbmtlZGlue2JhY2tncm91bmQ6IzAwNzRhMX0ubnhzLXNoYXJlLWJ0bi1zdHVtYmxlVXBvbntiYWNrZ3JvdW5kOiNmZjRlMmV9Lm54cy1zaGFyZS1idG4tdHVtYmxye2JhY2tncm91bmQ6IzM1NDY1Y30ubnhzLXNoYXJlLWJ0bi1waW50ZXJlc3R7YmFja2dyb3VuZDojY2EyMTJhO2ZvbnQtc2l6ZToxLjFyZW19Lm54cy1zaGFyZS1idG4tcmVkZGl0e2JhY2tncm91bmQ6I2ZmNTcwMDtmb250LXNpemU6MS4xcmVtfS5ueHMtc2hhcmUtYnRuLW1haWx7YmFja2dyb3VuZDojZmYyZTQwfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcGxhdGZvcm1OYW1lO1xuICBwbGF0Zm9ybTogUGxhdGZvcm07XG4gIEBJbnB1dCgpIHRleHRFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBhZGRlZFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybXNbdGhpcy5wbGF0Zm9ybU5hbWVdO1xuICAgIHRoaXMuY29uc3RydWN0VXJsKCk7XG4gIH1cblxuICBjbGljayhldmVudCkge1xuICAgIHdpbmRvdy5vcGVuKHRoaXMudXJsLCAnbmV3d2luZG93JywgJ3dpZHRoPTEwNzAsIGhlaWdodD02MDAnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgY29uc3RydWN0VXJsKCkge1xuICAgIHRoaXMudXJsID0gdGhpcy5wbGF0Zm9ybS51cmwgKyB0aGlzLnByb3BlcnRpZXMudXJsO1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLnByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGxhdGZvcm0ucHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnByb3BlcnRpZXNbdGhpcy5wbGF0Zm9ybS5wcm9wZXJ0aWVzW2tleV1dO1xuICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudXJsICs9IGAmJHtrZXl9PSR7dmFsfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ==