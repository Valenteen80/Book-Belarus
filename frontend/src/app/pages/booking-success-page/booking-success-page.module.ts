import { NgModule } from '@angular/core';
import { BookingSuccessPageComponent } from './booking-success-page.component';
import { BookingSuccessPageRoutingModule } from './booking-success-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [BookingSuccessPageComponent],
  imports: [
    BookingSuccessPageRoutingModule,
    SharedModule
  ]
})

export class BookingSuccessPageModule { }
