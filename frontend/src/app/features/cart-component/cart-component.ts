import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart-service';
import { CartItem } from '../../core/models/product-interfaces';
import { Router } from '@angular/router';
import { ProductModalService } from '../../core/services/product-modal-service';

@Component({
  selector: 'app-cart-component',
  imports: [CommonModule],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss',
})
export class CartComponent {
  items: CartItem[] = [];
  totalQuantity = 0;
  totalPrice = 0;
  expanded: Set<string> = new Set();
  selected: Set<string> = new Set();
  editingSizeFor: string | null = null;
  editingColorFor: string | null = null;

  constructor(
    private router: Router,
    private cartService: CartService,
    private modalService: ProductModalService
  ) {
    this.cartService.items$.subscribe((items) => {
      this.items = items;
      this.totalQuantity = this.cartService.totalQuantity();
      this.totalPrice = this.cartService.totalPrice();
      items.forEach((i) => {
        if (!this.selected.has(i.variantKey)) {
          this.selected.add(i.variantKey);
        }
      });
      Array.from(this.selected).forEach((key) => {
        if (!items.find((i) => i.variantKey === key)) {
          this.selected.delete(key);
        }
      });
    });
  }

  remove(variantKey: string) {
    this.cartService.remove(variantKey);
  }

  clear() {
    this.cartService.clear();
  }

  setQuantity(variantKey: string, value: string) {
    const qty = parseInt(value, 10);
    if (!isNaN(qty)) this.cartService.setQuantity(variantKey, qty);
  }

  increment(variantKey: string) {
    this.cartService.increment(variantKey, 1);
  }

  decrement(variantKey: string) {
    this.cartService.increment(variantKey, -1);
  }

  goStore() {
    this.router.navigate(['/']);
  }

  goCheckout() {
    this.router.navigate(['/checkout']);
  }

  openProductDetails(variantKey: string) {
    const product = this.items.find((item) => item.variantKey === variantKey);
    if (product) {
      this.modalService.open({ ...product });
    }
  }

  toggleExpanded(id: string) {
    if (this.expanded.has(id)) this.expanded.delete(id);
    else this.expanded.add(id);
  }

  isExpanded(id: string) {
    return this.expanded.has(id);
  }

  isSelected(variantKey: string): boolean {
    return this.selected.has(variantKey);
  }

  toggleSelected(variantKey: string, event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.checked) this.selected.add(variantKey);
    else this.selected.delete(variantKey);
  }

  areAllSelected(): boolean {
    if (!this.items.length) return false;
    return this.items.every((i) => this.selected.has(i.variantKey));
  }

  toggleSelectAll(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.checked) {
      this.items.forEach((i) => this.selected.add(i.variantKey));
    } else {
      this.items.forEach((i) => this.selected.delete(i.variantKey));
    }
  }

  selectedTotalPrice(): number {
    return this.items
      .filter((i) => this.selected.has(i.variantKey))
      .reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  selectedTotalQuantity(): number {
    return this.items
      .filter((i) => this.selected.has(i.variantKey))
      .reduce((sum, i) => sum + i.quantity, 0);
  }

  startEditSize(id: string) {
    this.editingSizeFor = id;
  }
  startEditColor(id: string) {
    this.editingColorFor = id;
  }
  applySize(variantKey: string, size: string) {
    const item = this.items.find((i) => i.variantKey === variantKey);
    if (!item) return;
    if (item.size === size) return;
    this.cartService.addVariantWithSize(item, size);
    this.editingSizeFor = null;
  }
  applyColor(variantKey: string, color: string) {
    const item = this.items.find((i) => i.variantKey === variantKey);
    if (!item) return;
    if (item.color === color) return;
    this.cartService.addVariantWithColor(item, color);
    this.editingColorFor = null;
  }
  discountPercent(item: CartItem): number | null {
    if (item.originalPrice && item.originalPrice > item.price) {
      return Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
    }
    return null;
  }
}
