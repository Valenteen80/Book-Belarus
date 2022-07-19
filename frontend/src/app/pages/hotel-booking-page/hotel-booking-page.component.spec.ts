import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingPageComponent } from './hotel-booking-page.component';

describe('HotelBookingPageComponent', () => {
  let component: HotelBookingPageComponent;
  let fixture: ComponentFixture<HotelBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelBookingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
