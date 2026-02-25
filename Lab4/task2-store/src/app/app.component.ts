import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header class="top">
      <h1>Online Store</h1>
    </header>

    <main class="page">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .top { padding: 14px 16px; border-bottom: 1px solid #e7e7e7; }
    .page { padding: 16px; }
    h1 { margin: 0; font-size: 18px; }
  `]
})
export class AppComponent {}