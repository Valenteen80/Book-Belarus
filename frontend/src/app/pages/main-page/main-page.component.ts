import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { CITIES } from './cities';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public cities: string[] = CITIES;
  public currentDate: Date = new Date;
  public headerValue: string = 'Для поиска отеля заполните поля';
  public searchButtonTitle: string = ButtonLabel.SEARCH;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.form = this.formBuilder.group({
      city: [this.cities[0], [Validators.required]],
      checkInDate: [this.currentDate, [Validators.required]],
      checkOutDate: ['', [Validators.required]],
      amountGuests: ['', [Validators.required]],
    });
  }

  public get checkOutDate() {
    return this.form.get('checkOutDate');
  }

  public get amountGuests() {
    return this.form.get('amountGuests');
  }

  public get checkInDate() {
    return this.form.get('checkInDate');
  }

  public onSubmit(): void {
    this.router.navigate(['hotel-list']);
  }

}
