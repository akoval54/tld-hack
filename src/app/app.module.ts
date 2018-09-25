import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {SearchBoxComponent} from './search-box/search-box.component';
import {DomainsComponent} from './domains/domains.component';

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, DomainsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
