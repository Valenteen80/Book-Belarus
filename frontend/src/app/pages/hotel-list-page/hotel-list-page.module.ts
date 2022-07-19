import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListPageComponent } from './hotel-list-page.component';
import { HotelListPageRoutingModule } from './hotel-list-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HotelListPageComponent],
  imports: [
    HotelListPageRoutingModule,
    SharedModule
  ]
})
export class HotelListPageModule { }
