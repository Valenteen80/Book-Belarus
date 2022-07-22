import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    MainPageRoutingModule,
    SharedModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
  ]
})
export class MainPageModule { }
