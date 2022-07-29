import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductFilters } from 'src/app/interfaces/product-filters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = environment .apiUrl;
  public filterOptions$: BehaviorSubject<ProductFilters> = new BehaviorSubject<ProductFilters>({} as ProductFilters);

  constructor(
    public http: HttpClient,
  ) { }

  public setFilterOptions(productFilters: ProductFilters): void {
    this.filterOptions$.next(productFilters);
  }

  public getProducts(): Observable<Product []> {
    let params = new HttpParams();
    params = params.append('city', this.filterOptions$.getValue().city);
    params = params.append('checkInDate', this.filterOptions$.getValue().checkInDate);
    params = params.append('checkOutDate', this.filterOptions$.getValue().checkOutDate);
    params = params.append('amountGuests', this.filterOptions$.getValue().amountGuests);

    return  this.http.get<Product[]>(`${this.apiUrl}/products`, {params});
  }

  public getProductsById(id: number): Observable<Product | undefined>  {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => {   
          return products.find((product: Product) => product.id === id);
        })
      );
  }

}
