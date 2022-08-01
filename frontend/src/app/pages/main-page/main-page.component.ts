import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { ProductService } from 'src/app/services/product/product.service';
import { CITIES } from './cities';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public cities: string[] = CITIES;
  public currentDate: Date = new Date;
  public checkInMaxDate: Date;
  public checkOutMinDate: Date;
  public headerValue: string = 'Для поиска отеля заполните поля';
  public searchButtonTitle: string = ButtonLabel.SEARCH;
  public form: FormGroup;  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.setCheckOutMinDate();
    this.setCheckInMaxDate();
  }

  private setCheckInMaxDate(): void {
    this.checkOutDate?.valueChanges.subscribe((data) => {
      this.checkInMaxDate = new Date(data.getTime() - 86400000);   
     });
  }

  private setCheckOutMinDate(): void {
    this.checkOutMinDate = new Date(new Date().getTime() + 86400000);
    this.checkInDate?.valueChanges.subscribe((data) => {
      this.checkOutMinDate = new Date(data.getTime() + 86400000);     
     });
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      city: [this.cities[0], [Validators.required]],
      checkInDate: [this.currentDate, [Validators.required]],
      checkOutDate: ['', [Validators.required]],
      quantityGuests: ['', [Validators.required]],
    });
  }

  public get checkOutDate() {
    return this.form.get('checkOutDate');
  }

  public get quantityGuests() {
    return this.form.get('quantityGuests');
  }

  public get checkInDate() {
    return this.form.get('checkInDate');
  }

  public onSubmit(): void {
    this.router.navigate(['hotel-list']);
    this.productService.setFilterOptions(this.form.value);   
  }

}
