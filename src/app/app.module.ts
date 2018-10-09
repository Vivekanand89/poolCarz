import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { FilterRidesPipe } from './filter-rides.pipe';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RideDetailComponent,
    BookRideComponent,
    LoginComponent,
    FilterRidesPipe,
    OfferRideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { }
