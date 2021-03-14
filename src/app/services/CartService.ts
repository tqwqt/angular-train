import { Injectable } from '@angular/core';
import { IBook, ICartItem } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartProduct: ICartItem[] = [];

  private _totalQuantity: number;

  private _totalSum: number;

  public getItems(): ICartItem[] {
    return this._cartProduct;
  }

  public addBook(bookName: string, books: IBook[]): void {
    let bookIndex = -1;
    const bookInCart = this._cartProduct.find((cartItem, index) => {
      const isRightBook = cartItem.book.name === bookName;
      if (isRightBook) bookIndex = index;
      return isRightBook;
    });
    if (bookIndex !== -1) {
      this._cartProduct[bookIndex] = { ...bookInCart, amount: bookInCart.amount + 1 };
    } else {
      const book = books.find((book) => book.name === bookName);
      const cartItem = {
        book,
        amount: 1,
      };
      this._cartProduct.push(cartItem);
    }
    this._cartProduct.forEach((item) => console.log(item.book, item.amount));
    this._updateCartData();
  }

  public removeBook(cartItem: ICartItem): void {
    this._cartProduct = this._cartProduct.filter((item) => item.book.name !== cartItem.book.name);
    this._updateCartData();
  }

  public increaseQuantity(cartItem: ICartItem): void {
    const index = this._cartProduct.findIndex((item) => item.book.name === cartItem.book.name);
    this._cartProduct[index] = {
      ...cartItem,
      amount: cartItem.amount + 1,
    };
    this._updateCartData();
  }

  public decreaseQuantity(cartItem: ICartItem): { isSucceed: boolean, wasLastItem: boolean } {
    const index = this._cartProduct.findIndex((item) => item.book.name === cartItem.book.name);
    if (cartItem.amount < 2) {
      this._cartProduct = this._cartProduct.filter((item) => item.book.name !== cartItem.book.name);
      return { isSucceed: true, wasLastItem: true };
    }
    this._cartProduct[index] = {
      ...cartItem,
      amount: cartItem.amount - 1,
    };
    this._updateCartData();
    return { isSucceed: true, wasLastItem: false };
  }

  public removeAllBooks(): void {
    this._cartProduct = [];
    this._totalSum = 0;
    this._totalQuantity = 0;
  }

  private _updateCartData(): void {
    this._totalQuantity = this._cartProduct.reduce((prev, current) => prev + current.amount, 0);
    console.log('quantity: ', this._totalQuantity);
    this._totalSum = this._cartProduct.reduce((prev, curr) => prev + curr.book.price * curr.amount, 0);
    console.log('sum:', this._totalSum);
  }
}
