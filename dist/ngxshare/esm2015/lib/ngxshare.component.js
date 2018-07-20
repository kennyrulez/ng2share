/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgxshareComponent {
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
if (false) {
    /** @type {?} */
    NgxshareComponent.prototype.platforms;
    /** @type {?} */
    NgxshareComponent.prototype.textEnabled;
    /** @type {?} */
    NgxshareComponent.prototype.addedText;
    /** @type {?} */
    NgxshareComponent.prototype.properties;
    /** @type {?} */
    NgxshareComponent.prototype._direction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4c2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4c2hhcmUvIiwic291cmNlcyI6WyJsaWIvbmd4c2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWF6RCxNQUFNOzs7eUJBRWlCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7OzJCQUV0RSxLQUFLOzs7OzswQkFRTSxFQUFFOzswQkFFdkIsWUFBWTs7Ozs7SUFFekIsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0YsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RDtTQUNGO0tBQ0Y7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQWdCOztRQUM3QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztRQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDWDs7Ozs7SUFHRCxJQUNJLFNBQVMsQ0FBQyxTQUFTO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzdCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztTQUNoQztLQUNGOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7OztPQUtMO2dCQUNMLE1BQU0sRUFBRSxDQUFDLCtoQkFBK2hCLENBQUM7YUFDMWlCOzs7d0JBR0UsS0FBSzswQkFFTCxLQUFLO3dCQUdMLEtBQUs7eUJBS0wsS0FBSzt3QkErQkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gJy4vcHJvcGVydGllcy51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm54cy1zaGFyZUNvbnRhaW5lciBueHMte3tkaXJlY3Rpb259fVwiPlxuICA8IS0tIFByaW1hcnkgc2hhcmUgcGxhdGZvcm1zLS0+XG4gIDxzaGFyZS1idXR0b24gKm5nRm9yPVwibGV0IHBsYXRmb3JtIG9mIHBsYXRmb3Jtc1wiIFtwbGF0Zm9ybU5hbWVdPVwicGxhdGZvcm1cIiBbdGV4dEVuYWJsZWRdPVwidGV4dEVuYWJsZWRcIiBbYWRkZWRUZXh0XT1cImFkZGVkVGV4dFwiIFtkaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICBbcHJvcGVydGllc109XCJwcm9wZXJ0aWVzXCI+XG4gIDwvc2hhcmUtYnV0dG9uPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm54cy1zaGFyZUNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1mbGV4O292ZXJmbG93OmhpZGRlbn0ubnhzLXZlcnRpY2Fse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubnhzLXNoYXJlLWJ0bntmb250LXNpemU6MjRweDtjdXJzb3I6cG9pbnRlcjtjb2xvcjojZWVlO2JvcmRlci1yYWRpdXM6MnB4O2hlaWdodDozMnB4O3dpZHRoOjMycHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1raHRtbC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZX0ubnhzLWhvcml6b250YWwtbWFyZ2lue21hcmdpbjowIDVweH0ubnhzLXZlcnRpY2FsLW1hcmdpbnttYXJnaW46NXB4IDB9Lm54cy1zaGFyZS1idG46aG92ZXJ7Y29sb3I6I2ZmZn0ubnhzLXNoYXJlLWJ0bi1tb3Jle2JhY2tncm91bmQ6I2NjY31gXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4c2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBQbGF0Zm9ybXNcbiAgQElucHV0KCkgcGxhdGZvcm1zID0gWyd0d2l0dGVyJywgJ2ZhY2Vib29rJywgJ2dvb2dsZVBsdXMnLCAncmVkZGl0JywgJ3BpbnRlcmVzdCcsICdsaW5rZWRpbiddO1xuICAvLyB0ZWxscyBpZiB0aGUgdGV4dCBtdXN0IGJlIGVuYWJsZWQgb24gcHJpbWFyeSBwbGF0Zm9ybXNcbiAgQElucHV0KCkgdGV4dEVuYWJsZWQgPSBmYWxzZTtcbiAgLy8gVGV4dCBhZGRlZCB0byB0aGUgdmFuaWxsYSBtZXNzYWdlLCBleDogJ3lvdXIgY3JlYXRpb24nIHdpbGwgcmVzdWx0IGluXG4gIC8vICdUd2VldCB5b3VyIGNyZWF0aW9uJyBmb3IgdHdpdHRlciBvciAnU2hhcmUgeW91ciBjcmVhdGlvbicgZm9yIGZiXG4gIEBJbnB1dCgpIGFkZGVkVGV4dDogc3RyaW5nO1xuICAvLyBUaGlzIHNob3VsZCBiZSBzZXQgdXAgZGlyZWN0bHkgaW4gdGhlIG1ldGEgdGFncyBhcyB0aGlzIGlzIGdvb2QgcHJhY3RpY2VcbiAgLy8gVXNlIHRoaXMgaW5wdXQgb25seSBpZiB5b3UgaGF2ZSBtdWx0aXBsZSBjb250ZW50IHRvIHNoYXJlIHBlciB1cmwuXG4gIC8vIFNvIGluIGNhc2UgeW91IG5lZWQgdGhpcyB0aGUgaW5wdXQgc2hvdWxkIGJlIGxpa2UgdGhlIGZvbGxvd2luZyBvYmplY3QgKHlvdSBjYW4gb21pdHQgc29tZSBmaWVsZHMpXG4gIC8vIHt0aXRsZTonbXkgdGl0bGUnLCBkZXNjcmlwdGlvbjonbXkgZGVzYycsaW1nOicgYW4gaW1hZ2UnLCB2aWE6J0NlZF9WREInLCBoYXNodGFnczonc29tZUhhc2hUYWcnfVxuICBASW5wdXQoKSBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzID0ge307XG4gIC8vIGhvcml6b250YWwgbGF5b3V0IG9yIHZlcnRpY2FsIGxheW91dCAoX2FjY2Vzc2VkIHZpYSBnZXR0ZXIgJiBzZXR0ZXIpXG4gIF9kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mZXRjaFByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIGZldGNoUHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMudXJsID0gdGhpcy5wcm9wZXJ0aWVzLnVybCB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdvZzp1cmwnKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi50b1N0cmluZygpO1xuICAgIHRoaXMucHJvcGVydGllcy50aXRsZSA9IHRoaXMucHJvcGVydGllcy50aXRsZSB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdvZzp0aXRsZScpIHx8IGRvY3VtZW50LnRpdGxlO1xuICAgIHRoaXMucHJvcGVydGllcy5kZXNjcmlwdGlvbiA9IHRoaXMucHJvcGVydGllcy5kZXNjcmlwdGlvbiB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdvZzpkZXNjcmlwdGlvbicpO1xuICAgIHRoaXMucHJvcGVydGllcy5pbWFnZSA9IHRoaXMucHJvcGVydGllcy5pbWFnZSB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdvZzppbWFnZScpO1xuICAgIHRoaXMucHJvcGVydGllcy52aWEgPSB0aGlzLnByb3BlcnRpZXMudmlhIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ254czp2aWEnKTtcbiAgICB0aGlzLnByb3BlcnRpZXMuaGFzaHRhZ3MgPSB0aGlzLnByb3BlcnRpZXMuaGFzaHRhZ3MgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnbnhzOmhhc2h0YWdzJyk7XG4gICAgZm9yIChjb25zdCBwIGluIHRoaXMucHJvcGVydGllcykge1xuICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXNbcF0gPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm9wZXJ0aWVzW3BdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRNZXRhQ29udGVudChwcm9wZXJ0eTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG1ldGFbcHJvcGVydHk9JyR7cHJvcGVydHl9J11gKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIHNhZmUgY2hlY2sgdG8gcHJldmVudCBtaXNzdXNlc1xuICBASW5wdXQoKVxuICBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxufVxuIl19