import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/foods';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [

      {
        id: 1,
        price: 10,
        name: 'Burger 1',
        favorite: false,
        star: 4.5,
        tags: ['FastFood', 'Burger', 'Lunch'],
        imageUrl: '/assets/images/burger1.jpg',
        cookTime: '10-20',
        origins: ['USA'],

      },
      {
        id: 2,
        price: 10,
        name: 'Burger 2',
        favorite: true,
        star: 5,
        tags: ['FastFood', 'Burger', 'Lunch'],
        imageUrl: '/assets/images/burger2.jpg',
        cookTime: '10-20',
        origins: ['USA'],

      },
      {
        id: 3,
        price: 10,
        name: 'Burger 3',
        favorite: false,
        star: 3.5,
        tags: ['FastFood', 'Burger', 'Lunch'],
        imageUrl: '/assets/images/burger3.jpg',
        cookTime: '10-20',
        origins: ['USA'],

      },

      {
        id: 4,
        price: 10,
        name: 'Burger 4',
        favorite: false,
        star: 2.5,
        tags: ['FastFood', 'Burger', 'Lunch'],
        imageUrl: '/assets/images/burger4.jpg',
        cookTime: '10-20',
        origins: ['USA'],
      },

      {
        id: 5,
        price: 10,
        name: 'Pizza 1 ',
        favorite: false,
        star: 4.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/pizza1.jpg',
        cookTime: '10-20',
        origins: ['Italy'],
      },

      {
        id: 6,
        price: 10,
        name: 'Pizza 2',
        favorite: false,
        star: 4.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/pizza2.jpg',
        cookTime: '10-20',
        origins: ['Italy'],
      },

      {
        id: 7,
        price: 10,
        name: 'Pizza 3',
        favorite: false,
        star: 4.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/images/pizza3.jpg',
        cookTime: '10-20',
        origins: ['Italy'],
      },





    ]
  }
}
