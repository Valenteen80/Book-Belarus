import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';
import { FormValidators } from 'src/app/utils/form-validators';
import { COUNTRIES } from './countries';

@Component({
  selector: 'app-hotel-booking-page',
  templateUrl: './hotel-booking-page.component.html',
  styleUrls: ['./hotel-booking-page.component.scss']
})
export class HotelBookingPageComponent implements OnInit, OnDestroy {
  public headerValue: string = 'введите свои данные';
  public bookButtonTitle: string = ButtonLabel.BOOK;
  public countries: string[] = COUNTRIES;
  public autoResize: boolean = true;
  public form: FormGroup;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required,  Validators.pattern(FormValidators.namePattern())]],
      lastName: ['', [Validators.required, Validators.pattern(FormValidators.namePattern())]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      paymentMethods: ['', [Validators.required]],
      comment: ['']
    });
  }

  public get firstName() {
    return this.form.get('firstName');
  }

  public get lastName() {
    return this.form.get('lastName');
  }

  public get country() {
    return this.form.get('country');
  }
  
  public get address() {
    return this.form.get('address');
  }

  public get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  public get zipCode() {
    return this.form.get('zipCode');
  }

  public get paymentMethods() {
    return this.form.get('paymentMethods');
  }

  public onSubmit(): void {
    this.subscription = this.productService.updatedProduct().subscribe((product: Product) => {
      this.router.navigate([RouteName.BOOKING_SUCCESS]);
    });
  }

}
