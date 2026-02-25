import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework:</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class Ex7Component {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {}
}
