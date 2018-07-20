export interface Platform {
    name: string;
    url: string;
    icon: string;
    text: string;
    properties?: any;
}
export interface Platforms {
    twitter: Platform;
    facebook: Platform;
    googlePlus: Platform;
    pinterest: Platform;
    reddit: Platform;
    linkedin: Platform;
    stumbleUpon: Platform;
    tumblr: Platform;
    mail: Platform;
}
export declare const platforms: Platforms;
