import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { ConnectableObservable, Observable, of } from 'rxjs';
import { RouteName } from 'src/app/enums/route-name-enum';
import { ProductService } from 'src/app/services/product/product.service';


@Injectable({
  providedIn: 'root'
})
export class GeneralGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private productService: ProductService
  ) { } 

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (Object.keys(this.productService.filterOptions$.getValue()).length !== 0) {
      return of(true)
    }

    this.router.navigate([RouteName.ROOT]);
    return of(false);
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {
    return this.canActivate(route, state);
  }
}
