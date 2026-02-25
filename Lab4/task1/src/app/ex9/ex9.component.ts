import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number:'1.2-2' }}</li>
      <li>Date with "date" {{ birthday | date:'fullDate' }}</li>
      <li>Currency with "currency" {{ cost | currency:'USD' }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class Ex9Component {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
