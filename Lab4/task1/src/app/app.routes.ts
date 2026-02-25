import { Routes } from '@angular/router';
import { Ex1Component } from './examples/ex1/ex1.component';
import { Ex2Component } from './examples/ex2/ex2.component';
import { Ex3Component } from './examples/ex3/ex3.component';
import { Ex4Component } from './examples/ex4/ex4.component';
import { Ex5Component } from './examples/ex5/ex5.component';
import { Ex6Component } from './examples/ex6/ex6.component';
import { Ex7Component } from './examples/ex7/ex7.component';
import { Ex8Component } from './examples/ex8/ex8.component';
import { Ex9Component } from './examples/ex9/ex9.component';



export const routes: Routes = [
  { path: '', redirectTo: 'ex1', pathMatch: 'full' },
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
  { path: 'ex3', component: Ex3Component },
  { path: 'ex4', component: Ex4Component },
  { path: 'ex5', component: Ex5Component },
  { path: 'ex6', component: Ex6Component },
  { path: 'ex7', component: Ex7Component },
  { path: 'ex8', component: Ex8Component },
  { path: 'ex9', component: Ex9Component }, 

  
];