import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TwitterComponent } from './twitter/twitter.component';
import { GoogleNewsComponent } from './google-news/google-news.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TwitterComponent,
    GoogleNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
