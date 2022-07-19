import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path:'hotel-list',
        loadChildren: () =>
          import('../pages/hotel-list-page/hotel-list-page.module').then(
            (m) => m.HotelListPageModule), 
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule { }
