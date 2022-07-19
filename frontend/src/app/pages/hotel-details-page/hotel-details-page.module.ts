import { NgModule } from '@angular/core';
import { HotelDetailsPageComponent } from './hotel-details-page.component';
import { HotelDetailsPageRoutingModule } from './hotel-details-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HotelDetailsPageComponent],
  imports: [
    HotelDetailsPageRoutingModule,
    SharedModule
  ]
})
export class HotelDetailsPageModule { }
