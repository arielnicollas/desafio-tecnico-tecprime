import { Component } from '@angular/core';
import { ApiService } from '../app.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CartService, CartItem } from '../cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  order = { name: '', email: '', address: '', paymentMethod: 'Pix', products: [] as { productId: number; quantity: number }[] };
  cartItems$: Observable<CartItem[]>; 
  totalPrice$: Observable<number>; 

  constructor(private apiService: ApiService, private cartService: CartService, private router: Router) {
    this.cartItems$ = this.cartService.getCartItems();
    this.totalPrice$ = this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + (item.price * item.quantity), 0))
    );
    // Atualize order.products
    this.cartItems$.subscribe(items => {
      this.order.products = items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
      }));
    });
  }

  submit() {
    this.apiService.createOrder(this.order).subscribe(() => {
      alert('Compra finalizada com sucesso!');
      this.cartService.clearCart();
      this.router.navigate(['/products']);
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }
}