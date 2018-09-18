import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DomainsComponent } from './domains/domains.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    DomainsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
