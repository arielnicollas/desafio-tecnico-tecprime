import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'checkout', component: CheckoutComponent },
];
