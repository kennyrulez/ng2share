import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxshareModule } from 'ngxshare';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxshareModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
