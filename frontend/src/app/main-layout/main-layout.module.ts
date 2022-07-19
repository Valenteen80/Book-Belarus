import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [SharedModule, MainLayoutRoutingModule]
})
export class MainLayoutModule { }
