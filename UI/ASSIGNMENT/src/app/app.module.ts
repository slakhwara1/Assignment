import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TwitterComponent } from './twitter/twitter.component';
import { GoogleNewsComponent } from './google-news/google-news.component';
import { ChartComponent } from './chart/chart.component';
import { FeedComponent } from './feed/feed.component';
import { HeaderComponent } from './header/header.component';
import { AvgFreqCalculatorComponent } from './avg-freq-calculator/avg-freq-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TwitterComponent,
    GoogleNewsComponent,
    ChartComponent,
    FeedComponent,
    HeaderComponent,
    AvgFreqCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
