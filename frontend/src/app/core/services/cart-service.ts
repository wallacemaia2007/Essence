import { Injectable } from '@angular/core';
import { CartItem, Product } from '../models/product-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly STORAGE_KEY = 'cartItems';
  private itemsMap: Map<string, CartItem> = new Map();
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  private cartItemCount = new BehaviorSubject<number>(0);

  items$ = this.itemsSubject.asObservable();
  cartItemCount$ = this.cartItemCount.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const arr: CartItem[] = JSON.parse(raw);
        this.itemsMap = new Map(
          arr.map((i) => {
            const variantKey = i.variantKey || this.buildVariantKey(i);
            const normalized: CartItem = { ...i, variantKey };
            return [variantKey, normalized];
          })
        );
        this.emit();
      }
    } catch {}
  }

  private persist(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(Array.from(this.itemsMap.values())));
    } catch {}
  }

  private emit(): void {
    this.itemsSubject.next(Array.from(this.itemsMap.values()));
    this.cartItemCount.next(
      Array.from(this.itemsMap.values()).reduce((sum, item) => sum + item.quantity, 0)
    );
  }

  add(product: Product, quantity: number = 1): void {
    if (quantity <= 0) return;
    const variantKey = this.buildVariantKey(product);
    const existing = this.itemsMap.get(variantKey);
    if (existing) {
      existing.quantity += quantity;
      this.itemsMap.set(variantKey, existing);
    } else {
      const newItem: CartItem = { ...product, quantity, variantKey };
      this.itemsMap.set(variantKey, newItem);
    }
    this.persist();
    this.emit();
  }

  setQuantity(variantKey: string, quantity: number): void {
    if (quantity <= 0) {
      this.remove(variantKey);
      return;
    }
    const existing = this.itemsMap.get(variantKey);
    if (existing) {
      existing.quantity = quantity;
      this.itemsMap.set(variantKey, existing);
      this.persist();
      this.emit();
    }
  }

  increment(variantKey: string, step: number = 1): void {
    const existing = this.itemsMap.get(variantKey);
    if (existing) {
      existing.quantity += step;
      if (existing.quantity <= 0) {
        this.itemsMap.delete(variantKey);
      } else {
        this.itemsMap.set(variantKey, existing);
      }
      this.persist();
      this.emit();
    }
  }

  addVariantWithSize(base: CartItem, newSize: string): void {
    const clone: Product = { ...base, size: newSize };
    this.add(clone, 1);
  }

  addVariantWithColor(base: CartItem, newColor: string): void {
    const clone: Product = { ...base, color: newColor };
    this.add(clone, 1);
  }

  remove(variantKey: string): void {
    if (this.itemsMap.delete(variantKey)) {
      this.persist();
      this.emit();
    }
  }

  clear(): void {
    this.itemsMap.clear();
    this.persist();
    this.emit();
  }

  totalQuantity(): number {
    return this.cartItemCount.value;
  }

  totalPrice(): number {
    let total = 0;
    for (const item of this.itemsMap.values()) total += item.price * item.quantity;
    return total;
  }

  snapshot() {
    return {
      items: Array.from(this.itemsMap.values()),
      totalQuantity: this.totalQuantity(),
      totalPrice: this.totalPrice(),
    };
  }

  private buildVariantKey(p: Product): string {
    return [p.id, p.size || '', p.color || ''].join('::');
  }
}
