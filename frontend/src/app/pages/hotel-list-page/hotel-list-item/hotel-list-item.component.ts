import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-hotel-list-item',
  templateUrl: './hotel-list-item.component.html',
  styleUrls: ['./hotel-list-item.component.scss']
})
export class HotelListItemComponent implements OnInit {
  @Input() public product: Product;

  public productAltImgAttribute: string = 'photo';
  public viewButtonTitle: string = ButtonLabel.VIEW;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }  
  
  public redirectToDetailsPage(product:Product): void {
    // this.router.navigate([`/${RouteName.HOTEL_DETAILS}/${product.id}`]);
  }

}
