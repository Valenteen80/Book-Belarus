import { NgModule } from '@angular/core';
import { HotelBookingPageComponent } from './hotel-booking-page.component';
import { HotelBookingPageRoutingModule } from './hotel-booking-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HotelBookingPageComponent],
  imports: [
    HotelBookingPageRoutingModule,
    SharedModule
  ]
})
export class HotelBookingPageModule { }
