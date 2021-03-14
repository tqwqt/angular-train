import {
  AfterViewInit, Component, ElementRef, ViewChild,
} from '@angular/core';
import { BookCategories, IBook, ICart } from './interfaces';
import { BooksService, CartService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef;

  public books: IBook[];

  public cart: ICart;

  constructor(private _booksService: BooksService, private _cartService: CartService) {
    this.books = _booksService.getBooks();
  }

  public ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'New Title';
  }

  public onBookBuy(bookName: string): void {
    this._cartService.addBook(bookName, this.books);
  }
}
