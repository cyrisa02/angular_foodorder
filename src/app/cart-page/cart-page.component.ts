import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItems } from '../shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItme: CartItems) {
    this.cartService.removeFromCart(cartItme.food.id);
    this.setCart();
  }

  changeQuantity(cartItme: CartItems, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItme.food.id, quantity);
    this.setCart();
  }
}
