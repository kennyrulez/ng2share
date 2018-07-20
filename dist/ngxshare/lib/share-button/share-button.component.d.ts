import { OnInit } from '@angular/core';
import { Platform } from '../platforms.utils';
import { Properties } from '../properties.utils';
export declare class ShareButtonComponent implements OnInit {
    platformName: any;
    platform: Platform;
    textEnabled: boolean;
    addedText: string;
    direction: string;
    properties: Properties;
    url: string;
    constructor();
    ngOnInit(): void;
    click(event: any): void;
    constructUrl(): void;
}
