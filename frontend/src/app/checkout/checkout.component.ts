import { Component } from '@angular/core';
import { ApiService } from '../app.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-checkout',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  order = { name: '', email: '', address: '', paymentMethod: 'Pix', products: [] };

  constructor(private apiService: ApiService, private router: Router) {
    this.order.products = (window as any).cart || [];
  }

  submit() {
    this.apiService.createOrder(this.order).subscribe(() => {
      alert('Compra finalizada com sucesso!');
      this.router.navigate(['/products']);
    });
  }
}