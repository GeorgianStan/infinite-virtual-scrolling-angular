import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InfiniteScrollingGridComponent } from './components/infinite-scrolling-grid/infinite-scrolling-grid.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollingGridComponent } from './components/virtual-scrolling-grid/virtual-scrolling-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollingGridComponent,
    VirtualScrollingGridComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    NoopAnimationsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
