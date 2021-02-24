import { Component, Input, OnInit } from '@angular/core';
import { BookCategories, IBook } from 'src/app/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit, IBook {
  @Input() public book: IBook;
  public name: string;
  public description: string;
  public price: number;
  public category: BookCategories;
  public createDate: number;
  public isAvailable: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.name = this.book.name;
    this.description = this.book.description;
    this.price = this.book.price;
    this.category = this.book.category;
    this.createDate = this.book.createDate;
    this.isAvailable = this.book.isAvailable;
  }

}
