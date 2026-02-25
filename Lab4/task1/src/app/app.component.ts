import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="display:flex; gap:12px; margin-bottom:12px;">
      <a routerLink="/ex1">Example 1</a>
      <a routerLink="/ex2">Example 2</a>
      <a routerLink="/ex3">Example 3</a>
      <a routerLink="/ex4">Example 4</a>
      <a routerLink="/ex5">Example 5</a>
      <a routerLink="/ex6">Example 6</a>
      <a routerLink="/ex7">Example 7</a>
      <a routerLink="/ex8">Example 8</a>
      <a routerLink="/ex9">Example 9</a>  
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}