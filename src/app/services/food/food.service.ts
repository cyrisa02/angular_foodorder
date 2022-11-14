import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      '/assets/images/burger1.jpg',
      '/assets/images/burger2.jpg',
      '/assets/images/burger3.jpg',
      '/assets/images/burger4.jpg',
      '/assets/images/pizza1.jpg',
      '/assets/images/pizza2.jpg',
      '/assets/images/pizza3.jpg',


    ]
  }
}
