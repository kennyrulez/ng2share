import { OnInit } from '@angular/core';
import { Properties } from './properties.utils';
export declare class NgxshareComponent implements OnInit {
    platforms: string[];
    textEnabled: boolean;
    addedText: string;
    properties: Properties;
    _direction: string;
    ngOnInit(): void;
    fetchProperties(): void;
    getMetaContent(property: string): string;
    direction: string;
}
