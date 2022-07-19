import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSuccessPageComponent } from './booking-success-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookingSuccessPageComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookingSuccessPageRoutingModule { }
