import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductFilter } from 'src/app/interfaces/product-filter';
import { environment } from 'src/environments/environment';
import { ConvertDateService } from '../convert-date/convert-date.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = environment .apiUrl;
  public filterOptions$: BehaviorSubject<ProductFilter> = new BehaviorSubject<ProductFilter>({} as ProductFilter);
  public updatedProduct$: BehaviorSubject<Product> = new BehaviorSubject<Product>({} as Product);

  constructor(
    public http: HttpClient,
    public convertDateService: ConvertDateService
  ) { }

  public setFilterOptions(productFilters: ProductFilter): void {
    this.filterOptions$.next(productFilters);
  }

  public getProducts(): Observable<Product []> {
    let params = new HttpParams();
    params = params.append('city', this.filterOptions$.getValue().city);
    params = params.append('checkInDate', this.filterOptions$.getValue().checkInDate);
    params = params.append('checkOutDate', this.filterOptions$.getValue().checkOutDate);
    params = params.append('quantityGuests', this.filterOptions$.getValue().quantityGuests);

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

  public createUpdatedProduct(product: Product): void {
    this.filterOptions$.subscribe((filterOptions) => {
      const convertCheckInDate = this.convertDateService.convertDate(filterOptions.checkInDate);
      const convertCheckOutDate = this.convertDateService.convertDate(filterOptions.checkOutDate);
      const updatedProduct = product;
      
      for(let i = convertCheckInDate; i < convertCheckOutDate; i = i + 24*60*60*1000) {
        const bookingDate = new Date(i).toISOString().substr(0,10);
        let foundDate = product.busyDates.find(busyDate =>  busyDate.date === bookingDate);

        if (!foundDate) {
          foundDate = {date: bookingDate, employedQuantity: filterOptions.quantityGuests};
          updatedProduct.busyDates.push(foundDate);
        } else {
          updatedProduct.busyDates.forEach((date) => {
            if (date.date === foundDate?.date) {
              date.employedQuantity = date.employedQuantity + filterOptions.quantityGuests;
            }
          })
        }
      }
      this.updatedProduct$.next(updatedProduct);
    })
  }

  public updatedProduct(): Observable<Product> {
    return this.updatedProduct$
    .pipe(
      switchMap((product: Product) => {
        return this.http.put<Product>(`${this.apiUrl}/products`, product)
      })
    );
  }

}
