import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductFilters } from 'src/app/interfaces/product-filters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = environment .apiUrl;
  private params: HttpParams = new HttpParams;

  constructor(
    public http: HttpClient,
  ) { }

  public setParams(productFilters: ProductFilters): void {
    this.params = this.params.append('city', productFilters.city);
    this.params = this.params.append('amountGuests', productFilters.amountGuests);
  }

  public getProducts(): Observable<Product []> {
    return  this.http.get<Product[]>(`${this.apiUrl}/products`, {params: this.params})
  }
}
