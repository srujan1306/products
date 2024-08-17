import { Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductdetailsComponent,
  },
];
