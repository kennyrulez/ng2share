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
                template: "<div class=\"nxs-shareContainer nxs-{{direction}}\">\n  <!-- Primary share platforms-->\n  <share-button *ngFor=\"let platform of platforms\" [platformName]=\"platform\" [textEnabled]=\"textEnabled\" [addedText]=\"addedText\" [direction]=\"direction\"\n    [properties]=\"properties\">\n  </share-button>\n</div>",
                styles: ["a{text-decoration:none}.nxs-shareContainer{display:inline-flex;overflow:hidden}.nxs-vertical{flex-direction:column}.nxs-share-btn{font-size:24px;cursor:pointer;color:#eee;border-radius:2px;height:32px;width:32px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn:hover{color:#fff}.nxs-share-btn-more{background:#ccc}"]
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4c2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4c2hhcmUvIiwic291cmNlcyI6WyJsaWIvbmd4c2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF6RCxNQUFNLE9BQU8saUJBQWlCOzs7UUFFNUIsaUJBQXFCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQzs7UUFFOUYsbUJBQXVCLEtBQUssQ0FBQzs7Ozs7UUFRN0Isa0JBQWtDLEVBQUUsQ0FBQzs7UUFFckMsa0JBQWEsWUFBWSxDQUFDOzs7OztJQUUxQixRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ25HLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0Q7U0FDRjtLQUNGOzs7OztJQUVELGNBQWMsQ0FBQyxRQUFnQjs7UUFDN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ1g7Ozs7O0lBR0QsSUFDSSxTQUFTLENBQUMsU0FBUztRQUNyQixJQUFJLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1NBQ2hDO0tBQ0Y7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isb1VBQXdDOzthQUV6Qzs7O3dCQUdFLEtBQUs7MEJBRUwsS0FBSzt3QkFHTCxLQUFLO3lCQUtMLEtBQUs7d0JBK0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tICcuL3Byb3BlcnRpZXMudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZS1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4c2hhcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hzaGFyZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neHNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gUGxhdGZvcm1zXG4gIEBJbnB1dCgpIHBsYXRmb3JtcyA9IFsndHdpdHRlcicsICdmYWNlYm9vaycsICdnb29nbGVQbHVzJywgJ3JlZGRpdCcsICdwaW50ZXJlc3QnLCAnbGlua2VkaW4nXTtcbiAgLy8gdGVsbHMgaWYgdGhlIHRleHQgbXVzdCBiZSBlbmFibGVkIG9uIHByaW1hcnkgcGxhdGZvcm1zXG4gIEBJbnB1dCgpIHRleHRFbmFibGVkID0gZmFsc2U7XG4gIC8vIFRleHQgYWRkZWQgdG8gdGhlIHZhbmlsbGEgbWVzc2FnZSwgZXg6ICd5b3VyIGNyZWF0aW9uJyB3aWxsIHJlc3VsdCBpblxuICAvLyAnVHdlZXQgeW91ciBjcmVhdGlvbicgZm9yIHR3aXR0ZXIgb3IgJ1NoYXJlIHlvdXIgY3JlYXRpb24nIGZvciBmYlxuICBASW5wdXQoKSBhZGRlZFRleHQ6IHN0cmluZztcbiAgLy8gVGhpcyBzaG91bGQgYmUgc2V0IHVwIGRpcmVjdGx5IGluIHRoZSBtZXRhIHRhZ3MgYXMgdGhpcyBpcyBnb29kIHByYWN0aWNlXG4gIC8vIFVzZSB0aGlzIGlucHV0IG9ubHkgaWYgeW91IGhhdmUgbXVsdGlwbGUgY29udGVudCB0byBzaGFyZSBwZXIgdXJsLlxuICAvLyBTbyBpbiBjYXNlIHlvdSBuZWVkIHRoaXMgdGhlIGlucHV0IHNob3VsZCBiZSBsaWtlIHRoZSBmb2xsb3dpbmcgb2JqZWN0ICh5b3UgY2FuIG9taXR0IHNvbWUgZmllbGRzKVxuICAvLyB7dGl0bGU6J215IHRpdGxlJywgZGVzY3JpcHRpb246J215IGRlc2MnLGltZzonIGFuIGltYWdlJywgdmlhOidDZWRfVkRCJywgaGFzaHRhZ3M6J3NvbWVIYXNoVGFnJ31cbiAgQElucHV0KCkgcHJvcGVydGllczogUHJvcGVydGllcyA9IHt9O1xuICAvLyBob3Jpem9udGFsIGxheW91dCBvciB2ZXJ0aWNhbCBsYXlvdXQgKF9hY2Nlc3NlZCB2aWEgZ2V0dGVyICYgc2V0dGVyKVxuICBfZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmV0Y2hQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBmZXRjaFByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLnVybCA9IHRoaXMucHJvcGVydGllcy51cmwgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6dXJsJykgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYudG9TdHJpbmcoKTtcbiAgICB0aGlzLnByb3BlcnRpZXMudGl0bGUgPSB0aGlzLnByb3BlcnRpZXMudGl0bGUgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6dGl0bGUnKSB8fCBkb2N1bWVudC50aXRsZTtcbiAgICB0aGlzLnByb3BlcnRpZXMuZGVzY3JpcHRpb24gPSB0aGlzLnByb3BlcnRpZXMuZGVzY3JpcHRpb24gfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6ZGVzY3JpcHRpb24nKTtcbiAgICB0aGlzLnByb3BlcnRpZXMuaW1hZ2UgPSB0aGlzLnByb3BlcnRpZXMuaW1hZ2UgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnb2c6aW1hZ2UnKTtcbiAgICB0aGlzLnByb3BlcnRpZXMudmlhID0gdGhpcy5wcm9wZXJ0aWVzLnZpYSB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdueHM6dmlhJyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmhhc2h0YWdzID0gdGhpcy5wcm9wZXJ0aWVzLmhhc2h0YWdzIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ254czpoYXNodGFncycpO1xuICAgIGZvciAoY29uc3QgcCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucHJvcGVydGllc1twXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0TWV0YUNvbnRlbnQocHJvcGVydHk6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBtZXRhW3Byb3BlcnR5PScke3Byb3BlcnR5fSddYCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBzYWZlIGNoZWNrIHRvIHByZXZlbnQgbWlzc3VzZXNcbiAgQElucHV0KClcbiAgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gIH1cblxuICBnZXQgZGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbn1cbiJdfQ==