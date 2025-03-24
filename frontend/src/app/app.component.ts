import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mx-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Loja Online</a>
    <div class="ms-auto">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="/products" routerLinkActive="active" style="cursor: pointer;">Produtos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/checkout" routerLinkActive="active" style="cursor: pointer;">
            <i class="bi bi-cart me-1"></i> Checkout
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-outlet></router-outlet>
  `,
})
export class AppComponent { }