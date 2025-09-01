import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class Card {
  @Input() card: any = {
    image: '',
    title: '',
    description: '',
    price: 0
  };

  item: any;

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    this.cartService.addToCart(item);
    alert(`${item.title} added to cart!`);
  }

}