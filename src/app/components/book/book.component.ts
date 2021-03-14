import {
  Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy,
} from '@angular/core';
import { BookCategories, IBook } from 'src/app/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit, IBook {
  @Input() public book: IBook;

  @Output() buy = new EventEmitter();

  public name: string;

  public description: string;

  public price: number;

  public category: BookCategories;

  public createDate: number;

  public isAvailable: boolean;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.book);
    this.name = this.book.name;
    this.description = this.book.description;
    this.price = this.book.price;
    this.category = this.book.category;
    this.createDate = this.book.createDate;
    this.isAvailable = this.book.isAvailable;
  }

  public buyBook(): void {
    this.buy.emit(this.book.name);
  }
}
