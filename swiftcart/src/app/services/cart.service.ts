import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  clearCart() {
    this.cartItems = [];
  }
}
