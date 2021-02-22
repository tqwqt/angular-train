import { Component } from '@angular/core';

// let test: unknown = 4;
// test = 5;

// let test2: unknown = {
//   b: 1,
//   x: () => {}
// }

// test.b = 1;
// test.x();

function make<T> (a: T): T[] {
  return Array(5).fill(null).map(() => a);
}

function extended<T, U>(a: T, b: U): T & U {
  return Object.assign({}, a, b);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-new-app';
}
