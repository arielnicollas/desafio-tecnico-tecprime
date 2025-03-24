import { Component, OnInit } from '@angular/core';
import { ApiService } from './../app.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService, private cartService: CartService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => (this.products = data));
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} adicionado ao carrinho!`);
  }
}