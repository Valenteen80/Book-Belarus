import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSuccessPageComponent } from './booking-success-page.component';

describe('BookingSuccessPageComponent', () => {
  let component: BookingSuccessPageComponent;
  let fixture: ComponentFixture<BookingSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSuccessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
