import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelBookingPageComponent } from './hotel-booking-page.component';

const routes: Routes = [
  {
    path: '',
    component: HotelBookingPageComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HotelBookingPageRoutingModule { }
