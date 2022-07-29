import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductFilters } from 'src/app/interfaces/product-filters';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-hotel-details-page',
  templateUrl: './hotel-details-page.component.html',
  styleUrls: ['./hotel-details-page.component.scss']
})
export class HotelDetailsPageComponent implements OnInit, OnDestroy {
  public product: Product;
  public productAltImgAttribute: string = 'photo';
  public bookButtonTitle: string = ButtonLabel.BOOK;
  public bookingDetails: ProductFilters;
  public total: number;
  public diffDays: number;
  private subscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProductById();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getProductById(): void {
    this.subscription = this.route.params
      .pipe(
        switchMap((params: Params) => this.productService.getProductsById(+params['id']) 
      ))
      .subscribe((product: Product | undefined) => {
        if (product) {
          this.product = product;
          this.getBookingDetails();
        }
      });
  }

  private getBookingDetails(): void {
    this.productService.filterOptions$
      .subscribe((bookingDetails: ProductFilters) => {
        this.bookingDetails = bookingDetails;
        const timeDiff = new Date(bookingDetails.checkOutDate).getTime() - new Date(bookingDetails.checkInDate).getTime();
        this.diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        this.total = this.diffDays * this.product.price * bookingDetails.amountGuests;
      });
  }

  public redirectToHotelBookingPage(): void {
    this.router.navigate([RouteName.HOTEL_BOOKING]);
  }

}
