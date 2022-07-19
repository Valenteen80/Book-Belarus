import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteName } from '../enums/route-name-enum';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/main-page/main-page.module').then((m) => m.MainPageModule),
      },
      {
        path: RouteName.HOTEL_LIST,
        loadChildren: () =>
          import('../pages/hotel-list-page/hotel-list-page.module').then(
            (m) => m.HotelListPageModule), 
      },
      {
        path: RouteName.HOTEL_DETAILS,
        loadChildren: () =>
          import('../pages/hotel-details-page/hotel-details-page.module').then(
            (m) => m.HotelDetailsPageModule), 
      },
      {
        path:RouteName.HOTEL_BOOKING,
        loadChildren: () =>
          import('../pages/hotel-booking-page/hotel-booking-page.module').then(
            (m) => m.HotelBookingPageModule), 
      },
      {
        path: RouteName.BOOKING_SUCCESS,
        loadChildren: () =>
          import('../pages/booking-success-page/booking-success-page.module').then(
            (m) => m.BookingSuccessPageModule), 
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule { }
