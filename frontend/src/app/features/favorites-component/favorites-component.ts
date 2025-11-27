import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StroreService } from '../store/services/store-service';
import { Subscription, combineLatest } from 'rxjs';
import { FavoriteService } from '../../core/services/favorite-service';
import { ProductModalService } from '../../core/services/product-modal-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-component',
  imports: [CommonModule],
  templateUrl: './favorites-component.html',
  styleUrl: './favorites-component.scss',
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favoriteProducts: any[] = [];
  private sub?: Subscription;

  constructor(
    private favoriteService: FavoriteService,
    private storeService: StroreService,
    private productModalService: ProductModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = combineLatest([
      this.storeService.getAllProducts(),
      this.favoriteService.favoritesIds$,
    ]).subscribe(([allProducts, favIds]) => {
      this.favoriteProducts = allProducts.filter((p) => favIds.has(p.id));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  remove(productId: string): void {
    this.favoriteService.remove(productId);
  }

    openProductModal(product: any): void {
    this.productModalService.open({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      imageUrl: product.imageUrl,
      description: product.description,
      category: product.category,
      subcategory: product.subcategory,
      sizes: product.sizes,
      rating: product.rating,
      reviews: product.reviews,
      inStock: product.inStock,
    });
  }

  goToStore(): void {
    this.router.navigate(['/loja']);

  }
}
