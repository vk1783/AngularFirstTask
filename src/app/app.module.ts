import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelInformationComponent } from './hotel-information/hotel-information.component';
import { HotelReviewsComponent } from './hotel-reviews/hotel-reviews.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelInformationComponent,
    HotelReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
