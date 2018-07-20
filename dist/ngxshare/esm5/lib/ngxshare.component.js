/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var NgxshareComponent = /** @class */ (function () {
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
         */
        function () {
            return this._direction;
        },
        // safe check to prevent missuses
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
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
        { type: Component, args: [{
                    selector: 'share-container',
                    template: "<div class=\"nxs-shareContainer nxs-{{direction}}\">\n  <!-- Primary share platforms-->\n  <share-button *ngFor=\"let platform of platforms\" [platformName]=\"platform\" [textEnabled]=\"textEnabled\" [addedText]=\"addedText\" [direction]=\"direction\"\n    [properties]=\"properties\">\n  </share-button>\n</div>",
                    styles: ["a{text-decoration:none}.nxs-shareContainer{display:inline-flex;overflow:hidden}.nxs-vertical{flex-direction:column}.nxs-share-btn{font-size:24px;cursor:pointer;color:#eee;border-radius:2px;height:32px;width:32px;display:flex;justify-content:center;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.nxs-horizontal-margin{margin:0 5px}.nxs-vertical-margin{margin:5px 0}.nxs-share-btn:hover{color:#fff}.nxs-share-btn-more{background:#ccc}"],
                },] },
    ];
    NgxshareComponent.propDecorators = {
        platforms: [{ type: Input }],
        textEnabled: [{ type: Input }],
        addedText: [{ type: Input }],
        properties: [{ type: Input }],
        direction: [{ type: Input }]
    };
    return NgxshareComponent;
}());
export { NgxshareComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4c2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4c2hhcmUvIiwic291cmNlcyI6WyJsaWIvbmd4c2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozt5QkFlbEMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQzs7MkJBRXRFLEtBQUs7Ozs7OzBCQVFNLEVBQUU7OzBCQUV2QixZQUFZOzs7OztJQUV6QixvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNuRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0YsR0FBRyxDQUFDLENBQUMsSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RDtTQUNGO0tBQ0Y7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCOztRQUM3QixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFrQixRQUFRLE9BQUksQ0FBQyxDQUFDO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztRQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDWDtJQUdELHNCQUNJLHdDQUFTOzs7O1FBUWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QjtRQVpELGlDQUFpQzs7Ozs7UUFDakMsVUFDYyxTQUFTO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzthQUM3QjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO2FBQ2hDO1NBQ0Y7OztPQUFBOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwwVEFLTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQywraEJBQStoQixDQUFDO2lCQUMxaUI7Ozs0QkFHRSxLQUFLOzhCQUVMLEtBQUs7NEJBR0wsS0FBSzs2QkFLTCxLQUFLOzRCQStCTCxLQUFLOzs0QkF4RFI7O1NBYWEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSAnLi9wcm9wZXJ0aWVzLnV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmUtY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibnhzLXNoYXJlQ29udGFpbmVyIG54cy17e2RpcmVjdGlvbn19XCI+XG4gIDwhLS0gUHJpbWFyeSBzaGFyZSBwbGF0Zm9ybXMtLT5cbiAgPHNoYXJlLWJ1dHRvbiAqbmdGb3I9XCJsZXQgcGxhdGZvcm0gb2YgcGxhdGZvcm1zXCIgW3BsYXRmb3JtTmFtZV09XCJwbGF0Zm9ybVwiIFt0ZXh0RW5hYmxlZF09XCJ0ZXh0RW5hYmxlZFwiIFthZGRlZFRleHRdPVwiYWRkZWRUZXh0XCIgW2RpcmVjdGlvbl09XCJkaXJlY3Rpb25cIlxuICAgIFtwcm9wZXJ0aWVzXT1cInByb3BlcnRpZXNcIj5cbiAgPC9zaGFyZS1idXR0b24+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0ubnhzLXNoYXJlQ29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWZsZXg7b3ZlcmZsb3c6aGlkZGVufS5ueHMtdmVydGljYWx7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5ueHMtc2hhcmUtYnRue2ZvbnQtc2l6ZToyNHB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOiNlZWU7Ym9yZGVyLXJhZGl1czoycHg7aGVpZ2h0OjMycHg7d2lkdGg6MzJweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LWtodG1sLXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lfS5ueHMtaG9yaXpvbnRhbC1tYXJnaW57bWFyZ2luOjAgNXB4fS5ueHMtdmVydGljYWwtbWFyZ2lue21hcmdpbjo1cHggMH0ubnhzLXNoYXJlLWJ0bjpob3Zlcntjb2xvcjojZmZmfS5ueHMtc2hhcmUtYnRuLW1vcmV7YmFja2dyb3VuZDojY2NjfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hzaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIFBsYXRmb3Jtc1xuICBASW5wdXQoKSBwbGF0Zm9ybXMgPSBbJ3R3aXR0ZXInLCAnZmFjZWJvb2snLCAnZ29vZ2xlUGx1cycsICdyZWRkaXQnLCAncGludGVyZXN0JywgJ2xpbmtlZGluJ107XG4gIC8vIHRlbGxzIGlmIHRoZSB0ZXh0IG11c3QgYmUgZW5hYmxlZCBvbiBwcmltYXJ5IHBsYXRmb3Jtc1xuICBASW5wdXQoKSB0ZXh0RW5hYmxlZCA9IGZhbHNlO1xuICAvLyBUZXh0IGFkZGVkIHRvIHRoZSB2YW5pbGxhIG1lc3NhZ2UsIGV4OiAneW91ciBjcmVhdGlvbicgd2lsbCByZXN1bHQgaW5cbiAgLy8gJ1R3ZWV0IHlvdXIgY3JlYXRpb24nIGZvciB0d2l0dGVyIG9yICdTaGFyZSB5b3VyIGNyZWF0aW9uJyBmb3IgZmJcbiAgQElucHV0KCkgYWRkZWRUZXh0OiBzdHJpbmc7XG4gIC8vIFRoaXMgc2hvdWxkIGJlIHNldCB1cCBkaXJlY3RseSBpbiB0aGUgbWV0YSB0YWdzIGFzIHRoaXMgaXMgZ29vZCBwcmFjdGljZVxuICAvLyBVc2UgdGhpcyBpbnB1dCBvbmx5IGlmIHlvdSBoYXZlIG11bHRpcGxlIGNvbnRlbnQgdG8gc2hhcmUgcGVyIHVybC5cbiAgLy8gU28gaW4gY2FzZSB5b3UgbmVlZCB0aGlzIHRoZSBpbnB1dCBzaG91bGQgYmUgbGlrZSB0aGUgZm9sbG93aW5nIG9iamVjdCAoeW91IGNhbiBvbWl0dCBzb21lIGZpZWxkcylcbiAgLy8ge3RpdGxlOidteSB0aXRsZScsIGRlc2NyaXB0aW9uOidteSBkZXNjJyxpbWc6JyBhbiBpbWFnZScsIHZpYTonQ2VkX1ZEQicsIGhhc2h0YWdzOidzb21lSGFzaFRhZyd9XG4gIEBJbnB1dCgpIHByb3BlcnRpZXM6IFByb3BlcnRpZXMgPSB7fTtcbiAgLy8gaG9yaXpvbnRhbCBsYXlvdXQgb3IgdmVydGljYWwgbGF5b3V0IChfYWNjZXNzZWQgdmlhIGdldHRlciAmIHNldHRlcilcbiAgX2RpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZldGNoUHJvcGVydGllcygpO1xuICB9XG5cbiAgZmV0Y2hQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcy51cmwgPSB0aGlzLnByb3BlcnRpZXMudXJsIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOnVybCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLnRpdGxlID0gdGhpcy5wcm9wZXJ0aWVzLnRpdGxlIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOnRpdGxlJykgfHwgZG9jdW1lbnQudGl0bGU7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uID0gdGhpcy5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOmRlc2NyaXB0aW9uJyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLmltYWdlID0gdGhpcy5wcm9wZXJ0aWVzLmltYWdlIHx8IHRoaXMuZ2V0TWV0YUNvbnRlbnQoJ29nOmltYWdlJyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzLnZpYSA9IHRoaXMucHJvcGVydGllcy52aWEgfHwgdGhpcy5nZXRNZXRhQ29udGVudCgnbnhzOnZpYScpO1xuICAgIHRoaXMucHJvcGVydGllcy5oYXNodGFncyA9IHRoaXMucHJvcGVydGllcy5oYXNodGFncyB8fCB0aGlzLmdldE1ldGFDb250ZW50KCdueHM6aGFzaHRhZ3MnKTtcbiAgICBmb3IgKGNvbnN0IHAgaW4gdGhpcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1twXSA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnByb3BlcnRpZXNbcF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldE1ldGFDb250ZW50KHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtwcm9wZXJ0eT0nJHtwcm9wZXJ0eX0nXWApO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gc2FmZSBjaGVjayB0byBwcmV2ZW50IG1pc3N1c2VzXG4gIEBJbnB1dCgpXG4gIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG59XG4iXX0=