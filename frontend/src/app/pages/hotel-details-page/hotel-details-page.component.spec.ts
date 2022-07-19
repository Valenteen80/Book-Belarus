import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsPageComponent } from './hotel-details-page.component';

describe('HotelDetailsPageComponent', () => {
  let component: HotelDetailsPageComponent;
  let fixture: ComponentFixture<HotelDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
