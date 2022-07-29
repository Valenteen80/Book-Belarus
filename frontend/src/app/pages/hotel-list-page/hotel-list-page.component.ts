import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonValue } from 'src/app/enums/button-value-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
import { Product } from 'src/app/interfaces/product';
import { SortButton } from 'src/app/interfaces/sort-button';
import { ProductService } from 'src/app/services/product/product.service';
import { SortService } from 'src/app/services/sort/sort.service';
import { SORTBUTTONS } from './sortButton';

@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.scss']
})
export class HotelListPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public products: Product[];
  public isProducts: boolean = true;
  public sortButtons: SortButton[] = SORTBUTTONS;

  constructor(
    public productService: ProductService,
    public sortService: SortService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getProducts(): void {
    this.subscription = this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
        this. isProducts = this.products.length === 0 ? false : true;
      });
  }

  public sortProducts(sortButton: SortButton): void {
    const index: number = this.sortButtons.findIndex((item: SortButton) => item.value === sortButton.value);
    this.sortButtons[index] = { ...sortButton };

    this.products =
      sortButton.value === ButtonValue.RATING
        ? this.sortService.sortByRating(sortButton.sortDirection, this.products)
        : this.sortService.sortByPrice(sortButton.sortDirection, this.products);
  }

  public redirectToDetailsPage(product: Product): void {
    this.router.navigate([`/${RouteName.HOTEL_DETAILS}/${product.id}`]);
  }

}
