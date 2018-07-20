import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxshareComponent } from './ngxshare.component';
import { ShareButtonComponent } from './share-button/share-button.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    NgxshareComponent,
    ShareButtonComponent
  ],
  exports: [
    NgxshareComponent
  ]
})
export class NgxshareModule { }
