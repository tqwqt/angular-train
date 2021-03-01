import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BookCategories, IBook, ICart } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef;
  public books: IBook[] = [
    {
      name: 'Poirot Investigates',
      description: `Poirot Investigates is a short story collection written by English author Agatha
      Christie and first published in the UK by The Bodley Head in March 1924.`,
      price: 40,
      category: BookCategories.Detective,
      createDate: 1924,
      isAvailable: true,
    },
    {
      name: 'Alice in Wonderland',
      description: `It tells of a young girl named Alice, who falls through a rabbit hole into a
      subterranean fantasy world populated by peculiar, anthropomorphic creatures.`,
      price: 45,
      category: BookCategories.Fantasy,
      createDate: 1865,
      isAvailable: false,
    },
    {
      name: 'Frankenstein',
      description: `Frankenstein tells the story of Victor Frankenstein, a young scientist who creates
      a sapient creature in an unorthodox scientific experiment.`,
      price: 66,
      category: BookCategories.Horror,
      createDate: 1818,
      isAvailable: true,
    },
    {
      name: 'Pride and Prejudice',
      description: `The novel follows the character development of Elizabeth Bennet, the dynamic protagonist
      of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference
      between superficial goodness and actual goodness.`,
      price: 49,
      category: BookCategories.Romance,
      createDate: 1813,
      isAvailable: true,
    },
    {
      name: `The Hitchhiker's Guide To The Galaxy`,
      description: `This is a comedy science fiction series created by Douglas Adams. Originally a 1978 radio comedy
      broadcast on BBC Radio 4, it was later adapted to other formats, including stage shows, novels, comic books,
      a 1981 TV series, a 1984 video game, and 2005 feature film.`,
      price: 55,
      category: BookCategories.ScienceFiction,
      createDate: 1980,
      isAvailable: true,
    },
  ];
  public cart: ICart = {
    items: [],
  };

  public ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'New Title';
    console.log('title:', this.title)
  }

  public onBookBuy(bookName: string): void {
    let bookIndex = -1;
    const bookInCart = this.cart.items.find((cartItem, index) => {
        const isRightBook = cartItem.book.name === bookName;
        if (isRightBook) bookIndex = index;
        return isRightBook;
      }
    );
    if (bookIndex !== -1) {
      this.cart.items[bookIndex] = { ...bookInCart, amount: bookInCart.amount + 1};
    } else {
      const book = this.books.find(book => book.name === bookName);
      const cartItem = {
        book,
        amount: 1,
      };
      this.cart.items.push(cartItem);
    }
    this.cart.items.forEach(item => console.log(item.book, item.amount))
  }


}
