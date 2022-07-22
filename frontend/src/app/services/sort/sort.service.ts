import { Injectable } from '@angular/core';
import { SortButtonDirection } from 'src/app/enums/sort-button-direction-enum';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  public sortByRating(sortDirection: string, products: Product[]): Product[] {
    return sortDirection === SortButtonDirection.ASC
      ? products.sort((a, b) => {
          return a.rating - b.rating;
        })
      : products.sort((a, b) => {
          return b.rating - a.rating;
        });
  }

  public sortByPrice(sortDirection: string, products: Product[]): Product[] {
    return sortDirection === SortButtonDirection.ASC
      ? products.sort((a, b) => {
          return a.price - b.price;
        })
      : products.sort((a, b) => {
          return b.price - a.price;
        });
  }

}
