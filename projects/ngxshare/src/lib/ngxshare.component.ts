import { Component, OnInit, Input } from '@angular/core';
import { Properties } from './properties.utils';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'share-container',
    templateUrl: './ngxshare.component.html',
    styleUrls: ['./ngxshare.component.css']
})
export class NgxshareComponent implements OnInit {
    // Platforms
    @Input() platforms = ['twitter', 'facebook', 'googlePlus', 'reddit', 'pinterest', 'linkedin'];
    // tells if the text must be enabled on primary platforms
    @Input() textEnabled = false;
    // Text added to the vanilla message, ex: 'your creation' will result in
    // 'Tweet your creation' for twitter or 'Share your creation' for fb
    @Input() addedText: string;
    // This should be set up directly in the meta tags as this is good practice
    // Use this input only if you have multiple content to share per url.
    // So in case you need this the input should be like the following object (you can omitt some fields)
    // {title:'my title', description:'my desc',img:' an image', via:'Ced_VDB', hashtags:'someHashTag'}
    @Input() properties: Properties = {};
    // horizontal layout or vertical layout (_accessed via getter & setter)
    _direction = 'horizontal';

    ngOnInit() {
        this.fetchProperties();
    }

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

    getMetaContent(property: string) {
        const elem = document.querySelector(`meta[property='${property}']`);
        if (elem) {
            return elem.getAttribute('content');
        }
        return '';
    }

    // safe check to prevent missuses
    @Input()
    set direction(direction) {
        if (direction === 'vertical') {
            this._direction = direction;
        } else {
            this._direction = 'horizontal';
        }
    }

    get direction() {
        return this._direction;
    }
}
