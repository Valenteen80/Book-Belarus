import { NgModule } from '@angular/core';
import { HotelBookingPageComponent } from './hotel-booking-page.component';
import { HotelBookingPageRoutingModule } from './hotel-booking-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';



@NgModule({
  declarations: [HotelBookingPageComponent],
  imports: [
    HotelBookingPageRoutingModule,
    SharedModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    InputTextareaModule
  ]
})
export class HotelBookingPageModule { }
