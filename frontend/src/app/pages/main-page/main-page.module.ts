import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
