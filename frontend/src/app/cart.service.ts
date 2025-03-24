import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.productId === product.id);
    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      const cartItem: CartItem = {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      this.cartItems.push(cartItem);
    }
    this.updateCart();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.updateCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(item => item.productId === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId); 
      } else {
        item.quantity = quantity;
        this.updateCart();
      }
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  getCartItemsSync(): CartItem[] {
    return [...this.cartItems];
  }

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  private updateCart() {
    this.cartItemsSubject.next([...this.cartItems]);
    localStorage.setItem('cart', JSON.stringify(this.cartItems)); 
  }
}