import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// tslint:disable-next-line:max-line-length
import {MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdGridListModule, MdIconModule, MdIconRegistry, MdInputModule, MdSelectModule, MdSlideToggleModule, MdToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CoffeeCardModule} from './coffee-card/coffee-card.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoffeeCardModule,
    CommonModule,
    FormsModule,
    HttpModule,
    // Hack for autocomplete to work w/ imports.
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    MdSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MdIconRegistry) {
    iconRegistry.setDefaultFontSetClass('material-icons');
  }
}
