import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatBadgeModule,
  MatTooltipModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {DomainsComponent} from './domains/domains.component';
import {SearchComponent} from './search/search.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, SearchBoxComponent, DomainsComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
