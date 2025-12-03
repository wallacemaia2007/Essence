import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { CartService } from '../../../core/services/cart-service';
import { CartDrawerService } from '../../../core/services/cart-drawer-service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss',
})
export class CartDrawerComponent {
  open = false;
  private subs = new Subscription();

  items = inject(CartService).items$;
  subtotal = inject(CartService).items$.pipe(
    map((list) => list.reduce((sum, it) => sum + it.price * it.quantity, 0))
  );

  constructor(
    private drawer: CartDrawerService,
    private cart: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs.add(this.drawer.open$.subscribe((o) => (this.open = o)));
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  close(): void {
    this.drawer.close();
  }

  removeItem(id: string): void {
    this.cart.remove(id);
  }

  updateQty(id: string, qty: number): void {
    this.cart.setQuantity(id, Number(qty));
  }

  adjustQty(id: string, qty: number): void {
    const next = Math.max(1, Number(qty));
    this.cart.setQuantity(id, next);
  }

  checkout(): void {
    this.close();
    this.router.navigate(['/carrinho']);
  }
}
