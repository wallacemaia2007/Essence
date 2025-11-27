import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModalService } from '../../../core/services/product-modal-service';
import { FavoriteService } from '../../../core/services/favorite-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-modal',
  imports: [CommonModule],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss',
})
export class ProductModalComponent {
  open = false;
  product: any = null;
  private subs: Subscription[] = [];
  selectedSize: string | null = null;

  constructor(private modalService: ProductModalService, private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.subs.push(this.modalService.isOpen$.subscribe((o) => (this.open = o)));
    this.subs.push(this.modalService.product$.subscribe((p) => (this.product = p)));
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  close(): void {
    this.modalService.close();
  }

  addToCart(p: any): void {
    console.log('Add to cart', p?.id, 'size:', this.selectedSize);
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  toggleFavorite(): void {
    if (this.product?.id) {
      this.favoriteService.toggle(this.product.id);
    }
  }

  isFavorite(): boolean {
    return this.product?.id ? this.favoriteService.isFavorite(this.product.id) : false;
  }
}
