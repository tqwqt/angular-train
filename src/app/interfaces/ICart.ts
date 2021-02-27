import { IBook } from './IBook';

export interface ICartItem {
  book: IBook;
  amount: number;
}

export interface ICart {
  items: ICartItem[];
}
