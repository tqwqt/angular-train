import {
  Component, Inject, InjectionToken, Input, OnInit,
} from '@angular/core';
import { ICart, ICartItem } from 'src/app/interfaces';
import {
  CartService, ConstantsService, GeneratorService, IConstantsService,
} from 'src/app/services';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  public items: ICartItem[] = [];

  constructor(private _cartService: CartService) {
    this.items = _cartService.getItems();
  }

  ngOnInit(): void {
  }

  handleDelete(cartItem: ICartItem): void {
    const result = this._cartService.decreaseQuantity(cartItem);
    if (result.isSucceed && result.wasLastItem) {
      this.items = this._cartService.getItems();
    }
  }

  handleAdd(cartItem: ICartItem): void {
    this._cartService.increaseQuantity(cartItem);
  }
}
