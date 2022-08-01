import { BusyDate } from "./busy-date";

export interface Product {
    id: number,
    name: string,
    city: string,
    img: string,
    description: string,
    price: number,
    rating: number,
    capacity: number,
    busyDates: BusyDate [],
}
