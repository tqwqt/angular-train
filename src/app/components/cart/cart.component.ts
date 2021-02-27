import { Component, Input, OnInit } from '@angular/core';
import { ICart, ICartItem } from 'src/app/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  @Input() cart: ICart;
  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(cartItem: ICartItem): void {
    const index = this.cart.items.findIndex(item => item.book.name === cartItem.book.name);
    if (cartItem.amount < 2) {
      this.cart.items = this.cart.items.filter(item => item.book.name !== cartItem.book.name);
      return;
    }
    this.cart.items[index] = {
      ...cartItem,
      amount: cartItem.amount -1,
    };
  }

  handleAdd(cartItem: ICartItem): void {
    const index = this.cart.items.findIndex(item => item.book.name === cartItem.book.name);
    this.cart.items[index] = {
      ...cartItem,
      amount: cartItem.amount + 1,
    }

  }

}
