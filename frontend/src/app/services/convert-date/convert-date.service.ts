import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertDateService {

  constructor() { }

  public convertDate(date: string) {
    let formatDate = new Date(date);
    let month = formatDate.getMonth() + 1 < 10 ? '0' + (formatDate.getMonth() + 1) : '' + (formatDate.getMonth() + 1);
    let day = formatDate.getDate() < 10 ? '0' + (formatDate.getDate()) : '' + (formatDate.getDate());
  
    return Date.parse(`${formatDate.getFullYear()}-${month}-${day}`);
  }
}
