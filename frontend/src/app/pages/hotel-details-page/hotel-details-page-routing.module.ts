import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsPageComponent } from './hotel-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: HotelDetailsPageComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HotelDetailsPageRoutingModule { }
