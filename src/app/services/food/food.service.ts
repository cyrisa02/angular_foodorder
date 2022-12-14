import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/foods';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }


  getAllFoodByTag(tag: string): Foods[] {

    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 7 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [

      {
        id: 1,
        price: 10,
        name: 'CheeseBurger',
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
        name: 'Hamburger',
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
        name: 'Burger Salad',
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
        name: 'Patatoes ',
        favorite: false,
        star: 2.5,
        tags: ['FastFood'],
        imageUrl: '/assets/images/burger4.jpg',
        cookTime: '10-20',
        origins: ['USA'],
      },

      {
        id: 5,
        price: 10,
        name: 'Vegetarian Pizza   ',
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
        name: 'Pizza ',
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
        name: 'Salami Pizza ',
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
