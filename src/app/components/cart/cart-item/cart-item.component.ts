import {
  ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation,
} from '@angular/core';
import { ICartItem } from 'src/app/interfaces';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass'],
  host: { class: 'HostCart' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CartItemComponent implements OnInit {
  @Input() item: ICartItem;

  @Output() delete = new EventEmitter<ICartItem>();

  @Output() add = new EventEmitter<ICartItem>();

  constructor() { }

  ngOnInit(): void {
    console.log('cart item::', this.item);
  }

  handleDelete(): void {
    this.delete.emit(this.item);
  }

  handleAdd(): void {
    this.add.emit(this.item);
  }
}
