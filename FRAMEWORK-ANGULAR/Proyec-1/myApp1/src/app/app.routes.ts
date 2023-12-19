import { Routes } from '@angular/router';
import { Pag1Component } from './pages/pag1/pag1.component';
import { Pag2Component } from './pages/pag2/pag2.component';

export const routes: Routes = [
    { path: 'PagA', component:Pag1Component},
    { path: 'PagB', component:Pag2Component}
];
