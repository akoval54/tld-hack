import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatBadgeModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {DomainsComponent} from './domains/domains.component';
import {SearchComponent} from './search/search.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, SearchBoxComponent, DomainsComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
