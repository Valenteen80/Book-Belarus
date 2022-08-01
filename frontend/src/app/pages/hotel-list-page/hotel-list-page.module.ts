import { NgModule } from '@angular/core';
import { HotelListPageComponent } from './hotel-list-page.component';
import { HotelListPageRoutingModule } from './hotel-list-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HotelListItemComponent } from './hotel-list-item/hotel-list-item.component';
import { SortPanelComponent } from './sort-panel/sort-panel.component';



@NgModule({
  declarations: [HotelListPageComponent, HotelListItemComponent, SortPanelComponent],
  imports: [
    HotelListPageRoutingModule,
    SharedModule
  ]
})
export class HotelListPageModule { }
