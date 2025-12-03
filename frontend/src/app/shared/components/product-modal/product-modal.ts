import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalService } from '../../../core/services/product-modal-service';
import { FavoriteService } from '../../../core/services/favorite-service';
import { Subscription } from 'rxjs';
import { CartService } from '../../../core/services/cart-service';
import { ProductModalData } from '../../../core/models/product-interfaces';
import { ColorTypes } from '../../../core/types/colors/colors-types';
import { CartDrawerService } from '../../../core/services/cart-drawer-service';

@Component({
  selector: 'app-product-modal',
  imports: [CommonModule],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss',
})
export class ProductModalComponent {
  open = false;
  product: ProductModalData | null = null;
  private subs: Subscription[] = [];
  selectedSize: string | null = null;
  selectedColor: string | null = null;
  private cart = inject(CartService);

  constructor(
    private modalService: ProductModalService,
    private favoriteService: FavoriteService,
    private cartDrawerService: CartDrawerService
  ) {}

  ngOnInit(): void {
    this.subs.push(this.modalService.isOpen$.subscribe((o) => (this.open = o)));
    this.subs.push(
      this.modalService.product$.subscribe((p) => {
        this.product = p;
        this.selectedSize = null;
        this.selectedColor = null;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  close(): void {
    this.modalService.close();
  }

  addToCart(p: ProductModalData): void {
    if (!p) return;
    const productToAdd = {
      ...p,
      size: this.selectedSize || p.size,
      color: this.selectedColor || p.color,
    };
    this.cart.add(productToAdd, 1);
    this.close();
    this.cartDrawerService.open();
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  toggleFavorite(): void {
    if (this.product?.id) {
      this.favoriteService.toggle(this.product.id);
    }
  }

  isFavorite(): boolean {
    return this.product?.id ? this.favoriteService.isFavorite(this.product.id) : false;
  }

  getColorHex(colorName: string): string {
    const normalizedName = colorName.toUpperCase().replace(/\s+/g, '_');
    return ColorTypes[normalizedName as keyof typeof ColorTypes] || '#6B7280';
  }
}
