import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListPageComponent } from './hotel-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: HotelListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HotelListPageRoutingModule { }
